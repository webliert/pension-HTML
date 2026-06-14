import { z } from 'zod'

/**
 * 预约参观表单校验
 * 与 supabase/schema.sql 中的 CHECK 约束保持一致
 */

// 中国大陆手机号
const phoneRegex = /^1[3-9]\d{9}$/

export const visitFormSchema = z.object({
  name: z
    .string()
    .min(2, '姓名至少 2 个字')
    .max(20, '姓名不能超过 20 个字')
    .regex(/^[一-龥a-zA-Z\s·]+$/, '姓名只能包含中文、英文或间隔号'),

  phone: z
    .string()
    .regex(phoneRegex, '请输入正确的 11 位手机号'),

  elderAge: z
    .coerce.number({ invalid_type_error: '请填写数字' })
    .int('年龄必须为整数')
    .min(50, '本中心服务对象为 50 岁及以上长者')
    .max(120, '请输入合理的年龄'),

  visitTime: z
    .string()
    .min(1, '请选择期望参观时间')
    .refine((v) => {
      const t = new Date(v)
      return !Number.isNaN(t.getTime())
    }, '请输入有效的时间')
    .refine((v) => {
      const t = new Date(v)
      return t.getTime() > Date.now() - 60_000 // 允许 1 分钟误差
    }, '参观时间需为未来时间'),

  notes: z
    .string()
    .max(500, '备注不能超过 500 字')
    .optional()
    .or(z.literal('')),

  // Honeypot 反爬虫字段：人类看不见，会自动留空；机器人会填上内容
  website: z.string().max(0, '检测到异常提交').optional().or(z.literal('')),
})

export type VisitFormValues = z.infer<typeof visitFormSchema>

export const defaultVisitValues: Partial<VisitFormValues> = {
  name: '',
  phone: '',
  elderAge: 70,
  visitTime: '',
  notes: '',
  website: '',
}