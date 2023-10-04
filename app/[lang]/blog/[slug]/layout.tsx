import { Post } from '@/lib/types'
import '../../globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { posts } from '@/app/api/database'

const montserrat = Montserrat({ subsets: ['latin'] })

/**
 * Get article detail from database where slug == params.slug
 * Return Promise<{ data: Post | null}>
 */
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return {
    title: posts[0].title,
    description: posts[0].content
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log()
  return (
    <html lang="en">
      <body className={montserrat.className.concat(" bg-[#262c3a]")}>{children}</body>
    </html>
  )
}
