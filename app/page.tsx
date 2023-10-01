import { CTA } from '@/components/landing/cta'
import { Engage } from '@/components/landing/engage'
import { Features } from '@/components/landing/features'
import { Header } from '@/components/landing/header'
import { Newsletter } from '@/components/landing/newsletter'
import { Partners } from '@/components/landing/partners'

export default function Home() {
  return (
    <main className="bg-[#262c3a]">
      <Header />
      <Partners />
      <Features />
      <Engage />
      <CTA />
      <Newsletter />
    </main>
  )
}
