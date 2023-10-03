/**
 * landing->Engage
 * Engage section of the landing page
 */
import * as React from "react"
import { Button } from "../ui/button"
import { Translations } from "@/app/[lang]/dictionary"
import AnimatedElement from "../ui/animated-element"


export interface EngageProps {
	translations: Translations
}

const Engage: React.FC<EngageProps> = ({ translations }) => {
	return (
		<section className="bg-[#262c3a] py-16 flex flex-col md:flex-row">
			<div className="container mx-auto">
				<AnimatedElement className="flex flex-col py-8 space-y-2" animation="fadeInRight">
					<div className="relative pb-8">
						<h2 className="text-[3.5rem] font-bold text-white">{translations.engage.engage}
							<span className="text-[#2ce5a7] dark:text-[#2ce5a7] capitalize"> {translations.engage.win}</span>. {translations.engage.repeat}</h2>
					</div>
					<p className="dark:text-[#999] text-[#999] pb-8">
						{translations.engage.description}
					</p>
					<Button variant={"kboom"} className="text-2xl py-8 px-8">{translations.engage.exploreButton}</Button>
				</AnimatedElement>
			</div>

			<div className="container flex justify-center mt-8 md:mt-8">
				<AnimatedElement className="" animation="fadeInLeft">
					<img src="/images/phone.png" className="w-[24rem] " alt="" />
				</AnimatedElement>
			</div>

		</section>
	)
}

Engage.displayName = "Engage"

export { Engage }
