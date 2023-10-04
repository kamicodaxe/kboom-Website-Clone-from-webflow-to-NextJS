/**
 * landing->Features
 * Features section of the landing page
 */
import * as React from "react"
import { Orbitron } from 'next/font/google'
import clsx from "clsx"
import { Translations } from "@/app/[lang]/dictionary"
import AnimatedElement from "../ui/animated-element"

const orbitron = Orbitron({ subsets: ['latin'] })


export interface FeaturesProps {
	translations: Translations
}
const Features: React.FC<FeaturesProps> = ({ translations }) => {
	return (
		<section
			className="bg-gradient-to-b from-black via-transparent to-black bg-cover bg-center bg-fixed py-16"
			style={{
				backgroundImage: "linear-gradient(rgba(0, 18, 0, .75), rgba(0, 0, 0, .75)), url('/images/bgfeatures.jpg')"
			}}>
			<AnimatedElement animation="fadeInUp">
				<div className="container mx-auto space-y-2 pb-4 text-center max-w-3xl">
					<h2 className="text-[3.5rem] font-bold text-white">{translations.features.title}</h2>
					<p className="dark:text-[#999] text-[#999] text-lg">
						{translations.features.description}
					</p>
				</div>
			</AnimatedElement>
			<div className="container mx-auto grid justify-center gap-8 md:grid-cols-2">
				<AnimatedElement className="flex h-full" animation="fadeInRight">
					<div className="flex bg-[#141820] p-8 rounded-xl ">
						<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
						<div className="space-y-4">
							<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>{translations.features.list[0].title}</h3>
							<p className="text-[#999] text-lg">
								{translations.features.list[0].description}
							</p>
						</div>
					</div>
				</AnimatedElement>
				<AnimatedElement className="flex h-full" animation="fadeInLeft">
					<div className="flex bg-[#141820] p-8 rounded-xl ">
						<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
						<div className="space-y-4">
							<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>{translations.features.list[1].title}</h3>
							<p className="text-[#999] text-lg">
								{translations.features.list[1].description}
							</p>
						</div>
					</div>
				</AnimatedElement>
				<AnimatedElement className="flex h-full" animation="fadeInRight">
					<div className="flex bg-[#141820] p-8 rounded-xl ">
						<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
						<div className="space-y-4">
							<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>{translations.features.list[2].title}</h3>
							<p className="text-[#999] text-lg">
								{translations.features.list[2].description}
							</p>
						</div>
					</div>
				</AnimatedElement>
				<AnimatedElement className="flex h-full" animation="fadeInLeft">
					<div className="flex bg-[#141820] p-8 rounded-xl ">
						<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
						<div className="space-y-4">
							<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>{translations.features.list[3].title}</h3>
							<p className="text-[#999] text-lg">
								{translations.features.list[3].description}
							</p>
						</div>
					</div>
				</AnimatedElement>
			</div>
		</section>
	)
}

Features.displayName = "Features"

export { Features }
