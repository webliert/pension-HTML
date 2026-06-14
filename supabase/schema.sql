-- ============================================================
-- 颐康养护中心 · 预约系统数据库 Schema
-- 适用：Supabase (PostgreSQL 15+)
-- 执行位置：Supabase 控制台 → SQL Editor → New query → 粘贴执行
-- ============================================================

-- 1. 预约表
create table if not exists public.reservations (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null,
  phone       text        not null,
  elder_age   int         not null,
  visit_time  timestamptz not null,
  notes       text,
  status      text        not null default 'pending',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),

  -- 数据完整性约束
  constraint chk_name_length  check (char_length(name) between 2 and 20),
  constraint chk_phone_format check (phone ~ '^1[3-9][0-9]{9}$'),
  constraint chk_elder_age    check (elder_age between 50 and 120),
  constraint chk_status_enum  check (status in ('pending', 'contacted', 'visited', 'cancelled')),
  constraint chk_notes_length check (notes is null or char_length(notes) <= 500)
);

-- 2. 索引（按时间倒序查询与按状态筛选是后台最高频操作）
create index if not exists idx_reservations_created_at
  on public.reservations (created_at desc);

create index if not exists idx_reservations_status
  on public.reservations (status);

create index if not exists idx_reservations_visit_time
  on public.reservations (visit_time);

-- 3. updated_at 自动维护
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_reservations_updated_at on public.reservations;
create trigger trg_reservations_updated_at
  before update on public.reservations
  for each row execute function public.set_updated_at();

-- 4. 启用行级安全（RLS）
alter table public.reservations enable row level security;

-- 5. RLS 策略

-- 5.1 任何人（包括匿名）都可提交预约
drop policy if exists "public insert reservation" on public.reservations;
create policy "public insert reservation"
  on public.reservations
  for insert
  to anon, authenticated
  with check (true);

-- 5.2 只有管理员（app_metadata.role = 'admin'）可读取
drop policy if exists "admin select reservation" on public.reservations;
create policy "admin select reservation"
  on public.reservations
  for select
  to authenticated
  using (
    coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
  );

-- 5.3 只有管理员可更新
drop policy if exists "admin update reservation" on public.reservations;
create policy "admin update reservation"
  on public.reservations
  for update
  to authenticated
  using (
    coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
  )
  with check (
    coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
  );

-- 5.4 只有管理员可删除
drop policy if exists "admin delete reservation" on public.reservations;
create policy "admin delete reservation"
  on public.reservations
  for delete
  to authenticated
  using (
    coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin'
  );

-- ============================================================
-- 创建管理员账号（在 Supabase 控制台执行完上述后，另起一段执行）
-- ============================================================
-- 步骤：
--   1. 左侧菜单 Authentication → Users → Add user → Create new user
--   2. 输入管理员邮箱 + 密码（务必使用强密码）
--   3. 用户创建成功后，复制该用户的 UUID（点开用户详情可见）
--   4. 把下面的 SQL 中 'your-admin@example.com' 替换为你的管理员邮箱
--      把 '00000000-0000-0000-0000-000000000000' 替换为该用户的 UUID
--   5. 执行以下 SQL：
--
-- update auth.users
--   set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
--   where email = 'your-admin@example.com';
--
-- 验证：执行下面语句，应返回 role = admin
-- select id, email, raw_app_meta_data->>'role' as role
--   from auth.users where email = 'your-admin@example.com';
--
-- ============================================================
-- 可选：创建一个按月聚合的视图，方便后台展示统计
-- ============================================================
create or replace view public.reservations_monthly_stats as
select
  date_trunc('month', created_at) as month,
  count(*)                          as total,
  count(*) filter (where status = 'pending')   as pending,
  count(*) filter (where status = 'contacted') as contacted,
  count(*) filter (where status = 'visited')   as visited,
  count(*) filter (where status = 'cancelled') as cancelled
from public.reservations
group by 1
order by 1 desc;

-- 视图同样需要 RLS 保护
alter view public.reservations_monthly_stats set (security_invoker = on);
grant select on public.reservations_monthly_stats to authenticated;

-- ============================================================
-- 结束。完成后请在控制台 Table Editor 中查看 reservations 表已存在。
-- ============================================================