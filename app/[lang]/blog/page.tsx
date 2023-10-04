import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../dictionary'
import { Newsletter } from '@/components/ui/newsletter'
import Link from 'next/link'
import clsx from 'clsx'

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
      <div className="text-gray-800 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-12 mx-auto">
          <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style={{
            backgroundImage: "url('https://source.unsplash.com/random/640x480')",
            backgroundPosition: 'center center',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
          }}>
            <div className="flex flex-col items-center p-8 py-12 text-center">
              <span>12 June</span>
              <h1 className="py-4 text-5xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
              <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
            {[...Array(3)].map((_, index) => (
              <Link key={index} href={`/blog/slug`}>
                <div key={index} className="pt-6 pb-4 space-y-2">
                  <span>12 June</span>
                  <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                  <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm text-sky-400">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className={clsx(
        "pt-6 sm:pt-8",
      )}>
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Latest</h2>
            <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

            {[...Array(4)].map((_, index) => (
              <Link href="/blog/slug" key={index}
                className={clsx(
                  "flex flex-col dark:bg-gray-900",
                  "hover:bg-gray-200 dark:hover:bg-gray-800"
                )}
              >
                <span aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={`https://source.unsplash.com/200x200/?games?${index}`} />
                </span>
                <div className="flex flex-col flex-1 p-6">
                  <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                  <a href="#" className="text-xs tracki uppercase hover:underline dark:text-sky-400">Convenire</a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2023</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>


      <section className="pt-6 sm:pt-8 text-gray-900 dark:text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Popular</h2>
            <p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

            {[...Array(8)].map((_, index) => (
              <Link href="/blog/slug" key={index}
                className={clsx(
                  "flex flex-col dark:bg-gray-900",
                  "hover:bg-gray-200 dark:hover:bg-gray-800"
                )}
              >
                <span aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={`https://source.unsplash.com/200x200/?games?${index + 8}`} />
                </span>
                <div className="flex flex-col flex-1 p-6">
                  <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                  <a href="#" className="text-xs tracki uppercase hover:underline dark:text-sky-400">Convenire</a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">Te nulla oportere reprimique his dolorum</h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>June 1, 2023</span>
                    <span>2.1K views</span>
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <Newsletter translations={translations} />

    </main>
  )
}
