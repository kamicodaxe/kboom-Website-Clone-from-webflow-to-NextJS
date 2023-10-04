import { Navbar } from '@/components/ui/navbar'
import { getDictionary } from '../dictionary'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Newsletter } from '@/components/ui/newsletter'
import { Metadata } from 'next'

interface ContactPageProps {
	params: {
		lang: string
	}
}

export default async function ContactPage({ params: { lang } }: ContactPageProps) {
	const translations = await getDictionary(lang)

	return (
		<main className="dark:bg-[#262c3a]">
			<Navbar pathname='/team' translations={translations} />

			<section className="bg-[#fed351] text-black dark:text-black">
				<div className="container mx-auto flex flex-col items-center py-32 text-center max-w-5xl">
					<h1 className="text-5xl font-[800] md:leading-[82px] md:text-7xl">
						{translations.contact.title}
					</h1>
					<Breadcrumb className="mx-auto" routes={[
						{
							title: translations.contact.header,
							href: '/contact'
						},
					]} />
				</div>
			</section>

			<Newsletter translations={translations} />

		</main>
	)
}


export const metadata: Metadata = {
	title: 'Contact',
	description: 'Contact KBOOM.gg',
	icons: {
		icon: "/images/features-1.png"
	}
}