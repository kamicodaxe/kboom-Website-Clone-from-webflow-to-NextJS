import { CTA } from '@/components/landing/cta'
import { Engage } from '@/components/landing/engage'
import { Features } from '@/components/landing/features'
import { Header } from '@/components/landing/header'
import { Newsletter } from '@/components/landing/newsletter'
import { Partners } from '@/components/landing/partners'
import { SelectLanguage } from '@/components/ui/selectLanguage'
import { getDictionary } from './dictionary'
// Define HomePops for TypeScript
interface HomeProps {
  params: {
    lang: string
  }
}
export default async function Home({ params: { lang } }: HomeProps) {
  const translations = await getDictionary(lang)

  return (
    <main className="bg-[#262c3a]">
      <Header translations={translations} />
      <Partners translations={translations} />
      <Features translations={translations} />
      <Engage translations={translations} />
      <CTA translations={translations} />
      <Newsletter translations={translations} />
      <SelectLanguage translations={translations} />
    </main>
  )
}
