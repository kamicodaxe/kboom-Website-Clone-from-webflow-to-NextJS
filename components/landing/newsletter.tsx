/**
 * landing->Newsletter
 * Newsletter section of the landing page
 */
import * as React from "react"
import { Button } from "../ui/button"
import { Translations } from "@/app/[lang]/dictionary"


export interface NewsletterProps {
	translations: Translations
}
const Newsletter: React.FC<NewsletterProps> = ({ translations }) => {
	return (
		<section
			className="bg-gradient-to-b from-black via-transparent to-black bg-cover bg-center py-16"
			style={{
				backgroundImage: 'url("/images/bgnewsletter.png")',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className="container mx-auto space-y-2 pb-4 text-center max-w-3xl">
				<h2 className="text-[3.5rem] font-bold text-white">
					{translations.newsletter.title}
					<span className="text-[#2ce5a7] dark:text-[#2ce5a7]"> {translations.newsletter.subtitle}</span>
				</h2>
				<p className="dark:text-[#999] text-[#999] text-lg">
					{translations.newsletter.description}
				</p>
				<br />
				<div className="flex bg-white space-y-0 rounded-br-[3rem] rounded-md overflow-hidden">
					<input placeholder="Your Email Adress" className="flex-1 px-4" />
					<Button variant={"kboom"} className="text-2xl py-8 px-8 mx-auto">{translations.newsletter.subscribeButton}</Button>
				</div>
			</div>
		</section>
	)
}

Newsletter.displayName = "Newsletter"

export { Newsletter }
