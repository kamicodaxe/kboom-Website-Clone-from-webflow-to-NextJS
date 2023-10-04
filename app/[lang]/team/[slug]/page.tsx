import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../../dictionary'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Newsletter } from '@/components/ui/newsletter'
import clsx from 'clsx'
import { Orbitron } from 'next/font/google'
import Link from 'next/link'
import { Metadata } from 'next'
const orbitron = Orbitron({ subsets: ['latin'] })


interface TeamMemberProps {
  params: {
    lang: string
  }
}

export default async function TeamMember({ params: { lang } }: TeamMemberProps) {
  const translations = await getDictionary(lang)

  return (
    <main className="dark:bg-[#262c3a]">
      <Navbar translations={translations} />

      <section className="bg-[#fed351] text-black dark:text-black">
        <div className="container mx-auto flex flex-col items-center py-16 text-center max-w-5xl">
          <h1 className="text-5xl font-[800] md:leading-[82px] md:text-7xl">
            {"Team"}
          </h1>
          <Breadcrumb className="mx-auto" routes={[
            {
              title: "Nathan Benamou",
              href: '/team/'
            }
          ]} />
        </div>
      </section>

      <div className="container mx-auto flex flex-col py-16 text-gray-800 dark:text-gray-200 max-w-3xl">
        <img src='/images/team/1.jpg' alt='Team Member' />

        <div className={clsx(
          orbitron.className,
          "w-full h-64 border-2 border-[#fed351] text-center flex flex-col justify-center",
          "text-4xl font-bold space-y-4"
        )}>
          <h2>Nathan Benamou</h2>
          <h3 className='text-2xl text-[#57b8ff] '>Back-End Lead</h3>
        </div>

        <div className="text-lg space-y-8 pt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu. Non etiam ipsum hendrerit elit, egestas. Eu diam est tortor ac lectus ac velit fames. arcu erat,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo arcu quis leo dui tristique vestibulum maecenas tellus viverra. Enim, ut adipiscing purus id sed duis est. Donec gravida est, et, arcu.
          </p>
        </div>

      </div>


      <section className={clsx(
        "pt-6 sm:pt-8",
      )}>
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Meet The Team</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-0 md:grid-cols-2 lg:grid-cols-3">

            {[...Array(6)].map((_, index) => (
              <Link href="/blog/slug" key={index}
                className={clsx(
                  "flex flex-col dark:bg-gray-900 relative",
                  "hover:bg-gray-200 dark:hover:bg-gray-800"
                )}
              >
                <span aria-label="Te nulla oportere reprimique his dolorum">
                  <img alt="" className="object-cover w-full h-96 bg-gray-500 dark:bg-gray-500" src={`https://source.unsplash.com/200x200/?games?${index}`} />
                </span>
                <div className={clsx(
                  "flex flex-col pt-4 px-12 text-center",
                  orbitron.className,
                  "-translate-y-12"
                )}>
                  <span className=" border-2 p-4 py-6 border-[#fed351]">
                    <h2 className='text-2xl font-bold'>Nathan Benamou</h2>
                    <h3 className='text-lg text-[#57b8ff] '>Back-End Lead</h3>
                  </span>
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


export const metadata: Metadata = {
  title: 'Team',
  description: 'Team KBOOM.gg',
}