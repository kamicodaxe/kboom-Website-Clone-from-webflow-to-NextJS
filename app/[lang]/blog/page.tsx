import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../dictionary'
import { Newsletter } from '@/components/ui/newsletter'
import Link from 'next/link'
import clsx from 'clsx'
import { posts } from '@/app/api/database'
import BlogPosts from '@/components/blog/blog-posts'
import { Suspense } from 'react'
import BlogHeader from '@/components/blog/header'

interface BlogProps {
  params: {
    lang: string
  }
}

export default async function Blog({ params: { lang } }: BlogProps) {
  const translations = await getDictionary(lang)

  return (
    <main className="">
      <Navbar translations={translations} />

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

// Enable Incremental Static Site Regeneration with a 60s interval
// export const revalidate = 60