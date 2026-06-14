import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''

// 优先读取新版 publishable key（Supabase 2024+ 自动签发，sb_publishable_ 前缀）
// 兜底兼容老项目的 anon key（eyJ 前缀的 JWT）
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  ''

// 是否已正确配置（用于前端 UI 给出友好提示）
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseKey)

if (!isSupabaseConfigured && typeof window !== 'undefined') {
  // 仅在浏览器端警告，避免服务端日志噪音
  // eslint-disable-next-line no-console
  console.warn(
    '[Supabase] 环境变量未配置。预约表单将无法提交。\n' +
    '请参照 docs/SUPABASE_SETUP.md 创建 .env.local 并填入项目凭证，然后重新构建。'
  )
}

/**
 * 浏览器端 Supabase 单例
 * 用于：预约提交、后台登录、后台数据查询
 * 静态站部署（Gitee Pages）：session 存 localStorage，无需服务端
 */
export const supabase = createClient<Database>(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseKey || 'placeholder-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false, // 静态站点无 OAuth 回调
    },
  }
)