import { posts } from '@/app/api/database'
import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../../dictionary'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Newsletter } from '@/components/ui/newsletter'

interface BlogPostProps {
  params: {
    lang: string
  }
}


export default async function BlogPost(props: BlogPostProps) {
  const translations = await getDictionary(props.params.lang)
  console.log(JSON.stringify(props, null, 2))
  const post = posts[0]

  return (
    <main className="bg-white dark:bg-[#262c3a]">
      <Navbar translations={translations} />

      <section className="bg-[#fed351] text-black dark:text-white">
        <div className="container mx-auto flex flex-col items-center pt-16 text-center max-w-5xl">
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

      <div className="container mx-auto flex flex-col py-16 text-gray-800 dark:text-gray-200 max-w-3xl">
        <img src="https://via.placeholder.com/800x400" alt="Blog Post" className="w-full h-64 object-cover mb-6" />
        <p className="mb-6 self-start">Published on August 25, 2023 by {post.author.name} </p>
        <div dangerouslySetInnerHTML={{
          __html: post.content
        }} className="prose" />

        <div className="border-t border-gray-300 pt-4">
          <h2 className="text-xl font-bold mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500 text-white px-2 py-1 rounded">Esports</span>
          </div>
          <h2 className="text-xl font-bold mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded">Gaming</span>
            <span className="bg-indigo-500 text-white px-2 py-1 rounded">Strategy</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded">Tactics</span>
          </div>
        </div>

      </div>

      <Newsletter translations={translations} />

    </main>
  )
}




