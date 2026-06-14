# Supabase 集成配置指南

> 适用版本：颐康养护中心官网 · 当前为静态部署（Gitee Pages）
> 预计耗时：15 分钟

## 为什么需要 Supabase

前台 `/visit` 表单提交后，需要把数据存到云端数据库；后台 `/admin` 需要登录与读取数据。
Gitee Pages 只能托管静态文件，所以数据库与认证必须由 BaaS 提供，我们选 **Supabase**（免费）。

## 一、创建 Supabase 项目

1. 打开 <https://supabase.com>，点击 **Start your project** 注册（可用 GitHub 账号）。
2. 点击 **New project**：
   - **Name**：`yikang-care`（或你喜欢的名字）
   - **Database Password**：设置一个强密码，**记下来**（重置数据库要用）
   - **Region**：建议选 **Singapore** 或 **Tokyo**（国内访问延迟最低）
   - **Plan**：保持默认 Free（500MB 数据库 + 50k 月活，足够个人养老机构）
3. 点击 **Create new project**，等待 1-2 分钟项目初始化完成。

## 二、获取 API 凭证

1. 项目就绪后，左侧菜单 **Project Settings**（齿轮）→ **API**。
2. 复制以下两个值（后续填入 `.env.local`）：

### ⚠️ 新旧项目 Key 类型不同，请按你的项目类型选择

**新版 Supabase（2024 年之后创建的项目）**：

| 字段名 | 示例值 | 在 `.env.local` 中的变量名 |
|--------|--------|---------------------------|
| Project URL | `https://abcdefg.supabase.co` | `NEXT_PUBLIC_SUPABASE_URL` |
| **Publishable key** | `sb_publishable_iPQzUT7Q1bWf...` | `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` |

**老版 Supabase（2024 年之前的项目）**：

| 字段名 | 示例值 | 在 `.env.local` 中的变量名 |
|--------|--------|---------------------------|
| Project URL | `https://abcdefg.supabase.co` | `NEXT_PUBLIC_SUPABASE_URL` |
| **anon public** | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` |

> 📝 **本项目代码同时支持两种 key**：优先读取 `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`，找不到时自动 fallback 到 `NEXT_PUBLIC_SUPABASE_ANON_KEY`。两种 key 在功能上完全等价——都是浏览器端可公开使用的安全凭证。

## 三、执行数据库 Schema

1. 左侧菜单 **SQL Editor** → **New query**。
2. 把项目内 `supabase/schema.sql` 的全部内容粘贴进去。
3. 点击右下角 **Run**，看到 `Success. No rows returned` 即成功。
4. 左侧菜单 **Table Editor** → 应该能看到 `reservations` 表，结构如下：

| 列 | 类型 | 说明 |
|----|------|------|
| id | uuid | 主键 |
| name | text | 姓名 |
| phone | text | 手机号 |
| elder_age | int | 长者年龄 |
| visit_time | timestamptz | 期望参观时间 |
| notes | text | 备注 |
| status | text | pending/contacted/visited/cancelled |
| created_at | timestamptz | 创建时间 |
| updated_at | timestamptz | 更新时间 |

## 四、创建管理员账号

### 4.1 创建用户

1. 左侧菜单 **Authentication** → **Users** → **Add user** → **Create new user**。
2. 填写：
   - **Email**：你的管理员邮箱（建议用机构邮箱，例如 `admin@yikang-care.com`）
   - **Password**：强密码（建议 16 位以上）
   - **Auto Confirm User**：**勾选**（这样无需邮件验证直接可用）
3. 点击 **Create user**。
4. 在用户列表中找到刚创建的用户，点击右侧 **...** → **Copy user ID**，记录下来备用。

### 4.2 授予管理员角色

回到 **SQL Editor** → **New query**，执行（把 `your-admin@example.com` 替换为你的管理员邮箱）：

```sql
update auth.users
  set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
  where email = 'your-admin@example.com';
```

验证（应返回 `role = admin`）：

```sql
select id, email, raw_app_meta_data->>'role' as role
  from auth.users where email = 'your-admin@example.com';
```

> ⚠️ **不要** 把管理员密码提交到代码仓库。
> 也不要修改 `app_metadata` 的其他字段，Supabase 用它来存储用户角色与权限。

## 五、配置环境变量

### 5.1 本地开发

```bash
cd /home/webliert/Documents/gitee/pension-html

# 复制模板
cp .env.example .env.local

# 用编辑器打开，填入第二步获取的两个值
nano .env.local   # 或 vim / VS Code
```

文件内容示例：

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ...
```

### 5.2 重新构建

环境变量只在 **构建时** 被注入到 JS bundle。修改 `.env.local` 后必须重新构建：

```bash
npm run build
```

构建成功后，`./out/_next/static/chunks/*.js` 中应包含你的 Supabase URL。

### 5.3 Gitee Pages 部署

⚠️ **Gitee Pages 静态托管不支持运行时环境变量**，必须在构建时把变量嵌入到产物中。

修改 `deploy.sh`（或 CI 脚本），在 `npm run build` 之前注入环境变量：

```bash
# 方式 A：本地构建时使用 .env.local
npm run build
# 然后把 out/ 部署

# 方式 B：在 CI / 部署脚本中注入
export NEXT_PUBLIC_SUPABASE_URL=https://abcdefg.supabase.co
export NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
npm run build
```

## 六、端到端验证

### 6.1 表单可写测试

1. 本地启动：`npx serve out`
2. 浏览器打开 `http://localhost:3000/visit`
3. 填写表单提交
4. Supabase 控制台 → **Table Editor** → `reservations` 表
5. 应能看到新插入的记录

### 6.2 RLS 安全性验证

打开浏览器开发者工具 Console，执行：

```js
// 匿名访问预约列表（应返回空数组，因未登录）
const { data, error } = await window.supabase.from('reservations').select('*')
console.log(data)  // 应为 []
```

正常情况下匿名用户 **只能插入，不能读取**。

## 七、常见问题

### Q1：提交后浏览器报 "Invalid API key"

- 检查 `.env.local` 是否存在且未被注释
- 重新 `npm run build`，再 `npx serve out`
- 确认 Supabase 项目状态为 Active（未暂停）

### Q2：管理员登录后仍读不到数据

- 重新检查第四步的 SQL 是否执行成功
- 在 SQL Editor 跑：
  ```sql
  select raw_app_meta_data from auth.users where email = 'your-admin@example.com';
  ```
  应包含 `"role": "admin"`

### Q3：表单提交成功但表里看不到

- Supabase 控制台 → **Logs** → **Database** → 查看是否有 RLS 报错
- 确认 schema.sql 中 `public insert reservation` 策略已创建

### Q4：免费版会不会超限？

- 数据库 500MB ≈ 可存 50 万条预约（每条约 1KB）
- 月活 50,000 对个人养老机构绰绰有余
- 真正超限前会邮件提醒

## 八、生产部署 Checklist

- [ ] Supabase 项目已创建并初始化 schema
- [ ] 管理员账号已创建并标记 role=admin
- [ ] `.env.local` 已配置（本地）/ 构建脚本注入变量（CI）
- [ ] `npm run build` 成功且无 TypeScript 错误
- [ ] 表单端到端测试通过
- [ ] 部署到 Gitee Pages 并实测线上提交
- [ ] Supabase 控制台 Logs 监控开启

---

完成上述步骤后，预约系统就完全可用了。
**下一步（第四步）将基于此搭建后台管理 UI**：登录页、预约列表、按时间筛选、状态更新等。