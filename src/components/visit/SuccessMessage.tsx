'use client'

import { CheckCircle2, Calendar, Phone } from 'lucide-react'
import dayjs from 'dayjs'
import { siteConfig } from '@/lib/site-config'
import type { VisitFormValues } from '@/lib/validators'

export function SuccessMessage({ data, onAgain }: { data: VisitFormValues; onAgain: () => void }) {
  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 border border-line shadow-card text-center">
      <div className="w-20 h-20 mx-auto rounded-full bg-success/15 grid place-items-center">
        <CheckCircle2 className="w-12 h-12 text-success" aria-hidden />
      </div>

      <h2 className="mt-6 text-3xl font-semibold text-ink">预约提交成功</h2>
      <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
        我们已收到您的预约信息，专属顾问将在 <strong className="text-primary">1 小时内</strong> 与您联系，
        请保持电话畅通。咨询全程不收取任何费用。
      </p>

      <div className="mt-8 max-w-md mx-auto text-left bg-background rounded-2xl p-6 border border-line">
        <h3 className="text-lg font-semibold text-ink mb-4">您的预约信息</h3>
        <dl className="space-y-3 text-base">
          <Row label="姓名" value={data.name} />
          <Row label="联系电话" value={data.phone} />
          <Row label="长者年龄" value={`${data.elderAge} 岁`} />
          <Row label="期望参观时间" value={dayjs(data.visitTime).format('YYYY年MM月DD日 HH:mm')} />
          {data.notes && <Row label="备注" value={data.notes} />}
        </dl>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-primary text-white text-lg font-medium rounded-xl hover:bg-primary-dark transition-colors"
        >
          <Phone className="w-5 h-5" /> 紧急联系 {siteConfig.phoneDisplay}
        </a>
        <button
          type="button"
          onClick={onAgain}
          className="inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-surface text-primary border-2 border-primary text-lg font-medium rounded-xl hover:bg-primary hover:text-white transition-colors"
        >
          <Calendar className="w-5 h-5" /> 再预约一次
        </button>
      </div>

      <p className="mt-6 text-sm text-ink-soft">
        如需修改或取消预约，请直接致电我们。
      </p>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <dt className="w-24 shrink-0 text-ink-soft">{label}</dt>
      <dd className="text-ink flex-1 break-words">{value}</dd>
    </div>
  )
}