import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../dictionary'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Newsletter } from '@/components/ui/newsletter'
import clsx from 'clsx'
import { Orbitron } from 'next/font/google'
import Link from 'next/link'
import { Metadata } from 'next'
import { teamMembers } from '@/app/api/database'
const orbitron = Orbitron({ subsets: ['latin'] })


interface AboutProps {
  params: {
    lang: string
  }
}

export default async function About({ params: { lang } }: AboutProps) {
  const translations = await getDictionary(lang)

  return (
    <main className="dark:bg-[#262c3a]">
      <Navbar pathname='/about' translations={translations} />

      <section className="bg-[#fed351] text-black dark:text-black">
        <div className="container mx-auto flex flex-col items-center py-16 text-center max-w-5xl">
          <h1 className="text-5xl font-[800] md:leading-[82px] md:text-7xl">
            {translations.navigation.about}
          </h1>
          <Breadcrumb className="mx-auto" routes={[
            {
              title: translations.navigation.about,
              href: '/about'
            }
          ]} />
        </div>
      </section>

      <div className="container mx-auto flex flex-col py-16 text-gray-800 dark:text-gray-200 max-w-3xl">

        <div className="text-lg space-y-8 pt-8">
          <p> {translations.about.paragraph1} </p>
          <p> {translations.about.paragraph2} </p>
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

            {teamMembers.map((member, index) => (
              <Link href={`/team/${member.slug}`} key={index}
                className={clsx(
                  "flex flex-col relative group",
                )}
              >
                <div className="object-cover w-full h-96 bg-gray-500 dark:bg-gray-500 overflow-hidden">
                  <img alt={member.name} className="object-cover duration-5000 group-hover:scale-150" src={member.imageUrl} />
                </div>
                <div className={clsx(
                  "flex flex-col pt-4 px-12 text-center",
                  "-translate-y-12"
                )}>
                  <span className=" border-2 p-4 py-6 bg-gray-800 border-[#fed351]">
                    <h2 className={clsx(
                      'text-xl font-bold text-white',
                      orbitron.className,
                    )}>{member.name}</h2>
                    <h3 className='text-lg text-[#57b8ff] '>{member.role}</h3>
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
  title: 'About',
  description: 'About KBOOM.gg',
}