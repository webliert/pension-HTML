import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Container } from '@/components/ui/Container'
import { BiliBiliIcon, DouyinIcon, WechatChannelIcon, WechatOAIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="bg-ink text-white mt-16">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* 关于 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center text-2xl font-semibold">颐</div>
              <div>
                <div className="text-xl font-semibold leading-tight">{siteConfig.name}</div>
                <div className="text-sm text-white/60 leading-tight">国家五星养老机构</div>
              </div>
            </div>
            <p className="text-base text-white/70 leading-relaxed">
              专业医养结合，{siteConfig.stats.yearsInService} 年专注为长者提供有尊严、有温度的康养服务。
            </p>
          </div>

          {/* 导航 */}
          <div>
            <h3 className="text-lg font-semibold mb-5">快速导航</h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-base text-white/70 hover:text-white no-underline">{n.label}</Link>
                </li>
              ))}
              <li><Link href="/visit" className="text-base text-white/70 hover:text-white no-underline">预约参观</Link></li>
            </ul>
          </div>

          {/* 联系 */}
          <div>
            <h3 className="text-lg font-semibold mb-5">联系我们</h3>
            <ul className="space-y-4 text-base text-white/80">
              <li className="flex gap-3"><Phone className="w-5 h-5 shrink-0 mt-1" aria-hidden />
                <a href={`tel:${siteConfig.phone}`} className="no-underline hover:text-white">{siteConfig.phoneDisplay}</a></li>
              <li className="flex gap-3"><MapPin className="w-5 h-5 shrink-0 mt-1" aria-hidden /><span>{siteConfig.address}</span></li>
              <li className="flex gap-3"><Mail className="w-5 h-5 shrink-0 mt-1" aria-hidden /><span>{siteConfig.email}</span></li>
              <li className="flex gap-3"><Clock className="w-5 h-5 shrink-0 mt-1" aria-hidden /><span>{siteConfig.workingHours}</span></li>
            </ul>
          </div>

          {/* 二维码 & 社交 */}
          <div>
            <h3 className="text-lg font-semibold mb-5">关注我们</h3>
            <div className="flex items-start gap-4">
              <div className="text-center">
                <img src="/qrcode/wechat.jpg" alt="微信客服二维码"
                  className="w-28 h-28 bg-white rounded-xl p-1.5" />
                <div className="text-sm text-white/60 mt-2">微信咨询</div>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href={siteConfig.social.wechatOA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white no-underline">
                    <WechatOAIcon className="w-6 h-6" /> 微信公众号
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.wechatChannel} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white no-underline">
                    <WechatChannelIcon className="w-6 h-6" /> 微信视频号
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.douyin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white no-underline">
                    <DouyinIcon className="w-6 h-6" /> 抖音
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.bilibili} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white no-underline">
                    <BiliBiliIcon className="w-6 h-6" /> B站
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/60">
          <div>© {new Date().getFullYear()} {siteConfig.name}. 保留所有权利</div>
          <div>
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:text-white no-underline">
              京ICP备XXXXXXXX号-1
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}