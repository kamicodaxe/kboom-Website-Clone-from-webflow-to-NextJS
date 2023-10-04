import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Orbitron } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KBOOM Landing Page',
  description: 'Your Gateway to the Thrilling World of Esports! Immerse yourself in the heart-pounding action of competitive gaming. Explore cutting-edge gaming technology, follow your favorite teams, and dive into the esports phenomenon. Level up your gaming experience at KBOOM.gg!',
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode,
  params: {
    lang: string
  }
}) {
  return (
    <html lang={lang}>
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'es' }, { lang: 'nl' }]
}
