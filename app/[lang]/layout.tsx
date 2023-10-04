import clsx from 'clsx'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { ViewSettings } from '@/components/ui/view-settings'
import { getDictionary } from './dictionary'
import { SelectLanguage } from '@/components/ui/selectLanguage'

const montserrat = Montserrat({ subsets: ['latin'] })

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode,
  params: {
    lang: string
  }
}) {
  const translations = await getDictionary(lang)
  return (
    <html lang={lang}>
      <body className={clsx(montserrat.className)}>
        {children}

        <div className="flex justify-center space-x-16">
          <SelectLanguage lang={lang} translations={translations} />
          <ViewSettings />
        </div>

      </body>

    </html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'es' }, { lang: 'nl' }]
}
