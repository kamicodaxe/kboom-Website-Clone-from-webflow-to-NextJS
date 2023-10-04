import { posts } from '@/app/api/database'
import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../../dictionary'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Newsletter } from '@/components/ui/newsletter'
import { Post } from '@/lib/types'
import clsx from 'clsx'
import BlogPosts from '@/components/blog/blog-posts'

interface BlogPostProps {
  params: {
    lang: string
    slug: string
  }
}

const getPost: (slug: string) => Post = (slug) => {
  const post = posts.find(p => p.slug == slug)
  return post || posts[0]
}

const getColorClass: (index: number) => string = (index) => {
  let classes = ["bg-yellow-500", "bg-indigo-500", "bg-green-500", "bg-amber-500"]
  return classes[index % classes.length]
}

export default async function BlogPost(props: BlogPostProps) {
  const translations = await getDictionary(props.params.lang)
  console.log(JSON.stringify(props, null, 2))
  const post = getPost(props.params.slug)

  return (
    <main className="bg-white dark:bg-[#262c3a]">
      <Navbar pathname='blog' translations={translations} />

      <section className="bg-[#fed351] text-black dark:text-white">
        <div className="container mx-auto flex flex-col items-center py-16 text-center max-w-5xl">
          <h1 className="text-5xl font-[800] md:leading-[82px] md:text-7xl">
            {post.title}
          </h1>
          <Breadcrumb className="mx-auto" routes={[
            {
              title: translations.navigation.blog,
              href: '/blog'
            },
            {
              title: "article",
              href: post.slug
            }
          ]} />
        </div>
      </section>

      <div className="container mx-auto flex flex-col py-16 items-stretch text-gray-800 dark:text-gray-200 max-w-3xl">
        <img src="https://source.unsplash.com/1024x620/?games?99" alt="Blog Post" className="w-full h-96 object-cover mb-6" />
        <p className="mb-6 self-start">Published on August 25, 2023 by {post.author.name} </p>

        <div dangerouslySetInnerHTML={{
          __html: post.content
        }} className="prose w-full dark:prose-invert" />

        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {
              post.categories.map((cat, index) => (
                <span key={cat.id} className={clsx(
                  "text-white px-2 py-1 rounded",
                  getColorClass(index)
                )}>{cat.name}</span>
              ))
            }
          </div>
          <h2 className="text-xl font-bold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {
              post.tags.map((tag, index) => (
                <span key={tag.id} className={clsx(
                  "text-white px-2 py-1 rounded",
                  getColorClass(index)
                )}>{tag.name}</span>
              ))
            }
          </div>
        </div>

      </div>

      <BlogPosts title='Read More' subtitle='' posts={posts} showCount={4} />

      <Newsletter translations={translations} />

    </main>
  )
}


// // Dynamic metadata
export async function generateMetadata({ params: { slug } }: { params: { slug: string, lang: string } }) {
  const post = getPost(slug)
  return {
    title: post.title,
    description: post.content, // Should be description short content!
    icons: {
      icon: "/images/features-1.png"
    }
  }
}