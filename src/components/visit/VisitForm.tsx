'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertCircle, Loader2, Calendar, Phone } from 'lucide-react'
import { visitFormSchema, defaultVisitValues, type VisitFormValues } from '@/lib/validators'
import { supabase, isSupabaseConfigured } from '@/lib/supabase/client'
import { siteConfig } from '@/lib/site-config'
import { SuccessMessage } from './SuccessMessage'

// 本地简易限流：5 分钟内同设备只能提交一次
const RATE_LIMIT_KEY = 'yikang_visit_last_submit'
const RATE_LIMIT_MS = 5 * 60 * 1000

export function VisitForm() {
  const [submitting, setSubmitting] = useState(false)
  const [serverError, setServerError] = useState('')
  const [submitted, setSubmitted] = useState<VisitFormValues | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VisitFormValues>({
    resolver: zodResolver(visitFormSchema),
    defaultValues: defaultVisitValues,
    mode: 'onBlur',
  })

  if (submitted) {
    return <SuccessMessage data={submitted} onAgain={() => { setSubmitted(null); reset() }} />
  }

  if (!isSupabaseConfigured) {
    return (
      <div className="bg-surface rounded-2xl p-8 border-2 border-danger/40">
        <div className="flex gap-3 items-start">
          <AlertCircle className="w-6 h-6 text-danger shrink-0 mt-0.5" aria-hidden />
          <div>
            <h2 className="text-xl font-semibold text-ink">预约功能暂未启用</h2>
            <p className="mt-3 text-base text-ink-soft leading-relaxed">
              当前网站尚未配置在线预约服务，请直接拨打下方热线联系我们：
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-4 inline-flex items-center gap-2 min-h-btn px-6 bg-primary text-white text-lg font-medium rounded-xl"
            >
              <Phone className="w-5 h-5" /> 致电 {siteConfig.phoneDisplay}
            </a>
            <p className="mt-6 text-sm text-ink-soft">
              或参考 <code className="px-1.5 py-0.5 bg-secondary-soft/60 rounded">docs/SUPABASE_SETUP.md</code> 完成配置。
            </p>
          </div>
        </div>
      </div>
    )
  }

  const onSubmit = async (data: VisitFormValues) => {
    setServerError('')

    // 限流校验
    const last = Number(localStorage.getItem(RATE_LIMIT_KEY) || 0)
    if (Date.now() - last < RATE_LIMIT_MS) {
      const wait = Math.ceil((RATE_LIMIT_MS - (Date.now() - last)) / 60_000)
      setServerError(`请 ${wait} 分钟后再提交新的预约，或直接致电我们。`)
      return
    }

    setSubmitting(true)
    const payload = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      elder_age: data.elderAge,
      visit_time: new Date(data.visitTime).toISOString(),
      notes: data.notes?.trim() || null,
    }
    const { error } = await supabase.from('reservations').insert([payload] as never)
    setSubmitting(false)

    if (error) {
      setServerError(
        '提交失败：' + (error.message || '网络异常，请稍后重试或致电 ' + siteConfig.phoneDisplay)
      )
      return
    }
    localStorage.setItem(RATE_LIMIT_KEY, String(Date.now()))
    setSubmitted(data)
  }

  // 最小可选时间：当前时刻之后 2 小时（避免误选已过去时间）
  const minVisitTime = (() => {
    const t = new Date(Date.now() + 2 * 60 * 60 * 1000)
    t.setSeconds(0, 0)
    return t.toISOString().slice(0, 16)
  })()

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-surface rounded-2xl p-6 md:p-10 border border-line shadow-card">
      <h2 className="text-2xl font-semibold text-ink">填写预约信息</h2>
      <p className="mt-2 text-base text-ink-soft">所有信息仅用于本次预约沟通，绝不外泄。</p>

      {/* Honeypot 反爬虫：视觉与 aria 隐藏 */}
      <div className="absolute opacity-0 pointer-events-none -z-10" aria-hidden="true">
        <label htmlFor="website-hp">请勿填写</label>
        <input id="website-hp" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div className="mt-8 space-y-6">
        {/* 姓名 */}
        <Field label="长者或家属姓名" required error={errors.name?.message}>
          <input
            type="text"
            placeholder="例如：张先生"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputCls(!!errors.name)}
            {...register('name')}
          />
        </Field>

        {/* 电话 */}
        <Field label="联系电话" required error={errors.phone?.message} hint="我们会通过此电话与您确认参观时间">
          <input
            type="tel"
            inputMode="numeric"
            placeholder="11 位手机号"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            className={inputCls(!!errors.phone)}
            {...register('phone')}
          />
        </Field>

        {/* 老人年龄 */}
        <Field label="长者年龄" required error={errors.elderAge?.message}>
          <input
            type="number"
            inputMode="numeric"
            placeholder="例如：75"
            min={50}
            max={120}
            aria-invalid={!!errors.elderAge}
            className={inputCls(!!errors.elderAge)}
            {...register('elderAge')}
          />
        </Field>

        {/* 期望参观时间 */}
        <Field label="期望参观时间" required error={errors.visitTime?.message}>
          <div className="relative">
            <Calendar className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none" aria-hidden />
            <input
              type="datetime-local"
              min={minVisitTime}
              aria-invalid={!!errors.visitTime}
              className={`${inputCls(!!errors.visitTime)} pl-12`}
              {...register('visitTime')}
            />
          </div>
        </Field>

        {/* 备注 */}
        <Field label="备注（选填）" error={errors.notes?.message} hint="如健康状况、特殊需求、关注的房型等">
          <textarea
            rows={4}
            placeholder="可填写需要我们提前准备的细节"
            className={`${inputCls(!!errors.notes)} py-3 min-h-[7rem] resize-y`}
            {...register('notes')}
          />
        </Field>

        {/* 服务端错误 */}
        {serverError && (
          <div role="alert" className="flex gap-3 items-start p-4 bg-danger/10 border border-danger/30 rounded-xl">
            <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" aria-hidden />
            <p className="text-base text-danger leading-relaxed">{serverError}</p>
          </div>
        )}

        {/* 提交按钮 */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-primary text-white text-lg font-medium rounded-xl shadow-soft hover:bg-primary-dark active:translate-y-px transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> 正在提交…
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" /> 提交预约
            </>
          )}
        </button>

        <p className="text-sm text-ink-soft text-center leading-relaxed">
          提交即表示您同意我们通过电话与您联系本次预约事宜
        </p>
      </div>
    </form>
  )
}

function Field({
  label, required, error, hint, children,
}: { label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-lg font-medium text-ink mb-2">
        {label}
        {required && <span className="text-danger ml-1" aria-hidden>*</span>}
      </label>
      {hint && <p className="text-sm text-ink-soft mb-2">{hint}</p>}
      {children}
      {error && (
        <p role="alert" className="mt-2 flex items-center gap-1.5 text-base text-danger">
          <AlertCircle className="w-4 h-4 shrink-0" aria-hidden /> {error}
        </p>
      )}
    </div>
  )
}

function inputCls(hasError: boolean) {
  return [
    'w-full min-h-btn px-4 bg-background border-2 rounded-xl',
    'text-lg text-ink placeholder:text-ink-soft/60',
    'focus:outline-none transition-colors',
    hasError ? 'border-danger focus:border-danger' : 'border-line focus:border-primary',
  ].join(' ')
}