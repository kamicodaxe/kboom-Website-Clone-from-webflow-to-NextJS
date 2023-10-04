import { CTA } from '@/components/landing/cta'
import { Engage } from '@/components/landing/engage'
import { Features } from '@/components/landing/features'
import { Header } from '@/components/landing/header'
import { Newsletter } from '@/components/ui/newsletter'
import { Partners } from '@/components/landing/partners'
import { SelectLanguage } from '@/components/ui/selectLanguage'
import { getDictionary } from './dictionary'
import { Metadata } from 'next'

interface HomeProps {
  params: {
    lang: string
  }
}

export default async function Home({ params: { lang } }: HomeProps) {
  const translations = await getDictionary(lang)

  return (
    <main className="dark:bg-[#262c3a]">
      <Header translations={translations} />
      <Partners translations={translations} />
      <Features translations={translations} />
      <Engage translations={translations} />
      <CTA translations={translations} />
      <Newsletter translations={translations} />
    </main>
  )
}


export const metadata: Metadata = {
  title: 'KBOOM Landing Page',
  description: 'Your Gateway to the Thrilling World of Esports! Immerse yourself in the heart-pounding action of competitive gaming. Explore cutting-edge gaming technology, follow your favorite teams, and dive into the esports phenomenon. Level up your gaming experience at KBOOM.gg!',
}