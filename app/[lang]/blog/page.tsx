import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../dictionary'
import { Newsletter } from '@/components/ui/newsletter'
import Link from 'next/link'
import clsx from 'clsx'
import { posts } from '@/app/api/database'
import BlogPosts from '@/components/blog/blog-posts'
import { Suspense } from 'react'
import BlogHeader from '@/components/blog/header'
import { Metadata } from 'next'

interface BlogProps {
  params: {
    lang: string
  }
}

export default async function Blog({ params: { lang } }: BlogProps) {
  const translations = await getDictionary(lang)

  return (
    <main className="dark:bg-[#262c3a]">
      <Navbar pathname='/blog' translations={translations} />

      <BlogHeader posts={posts} />

      <BlogPosts
        posts={posts.reverse()}
        title='Latest'
        subtitle='Qualisque erroribus usu at, duo te agam soluta mucius.'
        showCount={4}
      />

      <BlogPosts
        posts={posts}
        title='Popular'
        subtitle='Qualisque erroribus usu at, duo te agam soluta mucius.'
        showCount={8}
        imageIndexOffset={4}
      />

      <Newsletter translations={translations} />

    </main>
  )
}


// Enable Static Site Generation
export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug
  }))
}

export const metadata: Metadata = {
  title: 'KBoom.gg Blog',
  description: "KBoom egames stories",
  icons: {
    icon: "/images/features-1.png"
  }
}

// Enable Incremental Static Site Regeneration with a 60s interval
// export const revalidate = 60