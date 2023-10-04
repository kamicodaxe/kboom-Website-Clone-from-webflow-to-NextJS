import '../../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Team',
  description: 'Team KBOOM.gg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
