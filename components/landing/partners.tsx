/**
 * landing->partners
 * Partners section of the landing page
 */
import { Translations } from "@/app/[lang]/dictionary"
import * as React from "react"
import AnimatedElement from "../ui/AnimatedElement"


export interface PartnersProps {
	translations: Translations
}
const Partners: React.FC<PartnersProps> = ({ translations }) => {
	return (
		<section className="bg-gradient-to-tr py-16 from-[#57b8ff] to-[#21ce99]">
			<div className="container mx-auto py-8 space-y-2 text-center">
				<AnimatedElement animation="fadeInUp">
					<div className="relative pb-8">
						<h2 className="text-[3.5rem] font-bold">{translations.partners.title}</h2>
						<img src="/images/line.svg" className="absolute left-[50%]" alt="" />
					</div>
				</AnimatedElement>
				<AnimatedElement animation="fadeInUp">
					<p className="dark:text-[#333] text-[#333]">{translations.partners.subtitle}</p>
				</AnimatedElement>
			</div>
			<div className="container mx-auto grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col items-center">
					<AnimatedElement animation="fadeInUp">
						<img src="/images/partner-1.png" className="w-[24rem] " alt="" />
					</AnimatedElement>
				</div>
				<div className="flex flex-col items-center">
					<AnimatedElement animation="fadeInUp">
						<img src="/images/partner-2.png" className="w-[24rem] " alt="" />
					</AnimatedElement>
				</div>
				<div className="flex flex-col items-center">
					<AnimatedElement animation="fadeInUp">
						<img src="/images/partner-3.png" className="w-[24rem] " alt="" />
					</AnimatedElement>
				</div>
				<div className="flex flex-col items-center col-span-1 lg:col-span-3">
					<AnimatedElement animation="fadeInUp">
						<img src="/images/partner-4.png" className="w-[24rem] " alt="" />
					</AnimatedElement>
				</div>
			</div>
		</section>
	)
}

Partners.displayName = "Partners"

export { Partners }
