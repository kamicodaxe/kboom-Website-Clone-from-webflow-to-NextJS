/**
 * landing->Header
 * Header section of the landing page
 */
import * as React from "react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Translations } from "@/app/[lang]/dictionary"
import { Navbar } from "../ui/navbar"


export interface HeaderProps {
	translations: Translations
}

const Header: React.FC<HeaderProps> = ({ translations }) => {
	return (
		<header className="">
			<Navbar translations={translations} />
			<section className="text-gray-800 dark:text-white">
				<div className="container mx-auto flex flex-col items-center pt-16 text-center max-w-5xl">
					<h1 className="text-5xl font-[800] md:leading-[82px] md:text-7xl">Behind Every
						<span className="text-[#2ce5a7] dark:text-[#2ce5a7] capitalize"> Team </span> <br className="hidden md:block" />
						Is A Roar Of <span className="text-[#2ce5a7] dark:text-[#2ce5a7]"> Fans</span>
					</h1>
					<p className="px-8 mb-16 text-lg text-gray-600 dark:text-gray-200 ">
						{translations.cta.subtitle}
					</p>
					<Button variant={"kboom"} className="text-2xl py-8 px-8">{translations.cta.button}</Button>
					<div className="flex flex-wrap justify-center space-y-8 md:space-y-0">
						<img className="mx-6 h-16 filter  invert-0" src="/images/app-store.png" alt="" />
						<img className="mx-6 h-16 bg-red-100" src="/images/playstore.png" alt="" />
					</div>
				</div>
				<img src='/images/banner-img.png' />
			</section>

		</header>
	)
}

Header.displayName = "Header"

export { Header }
