/**
 * landing->Navbar
 * Navbar section of the landing page
 */
import * as React from "react"
import Link from 'next/link'
import { Translations } from "@/app/[lang]/dictionary"
import { Skeleton } from "./skeleton"

export interface NavbarProps {
	translations: Translations
}

const Navbar: React.FC<NavbarProps> & { Skeleton: React.FC } = ({ translations }) => {
	return (
		<nav className="flex justify-between py-5 px-4 mx-auto">
			<Link href="/" aria-label="Back to homepage" className="flex items-center">
				<img
					src="/images/logo.png"
					loading="lazy"
					width="209"
					className="pl-2 pb-2"
					alt="" ></img>
			</Link>
			<ul className="items-stretch hidden space-x-6 lg:flex text-xl font-bold text-gray-800 dark:text-white">
				<li className="flex">
					<Link rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent border-[#2ce5a7] text-[#2ce5a7] dark:text-[#2ce5a7] dark:border-[#2ce5a7]">{translations.navigation.home}</Link>
				</li>
				<li className="flex">
					<Link rel="noopener noreferrer" href="/blog" className="flex items-center px-4 -mb-1 border-b-2 border-transparent dark:border-transparent">{translations.navigation.blog}</Link>
				</li>
				<li className="flex">
					<Link rel="noopener noreferrer" href="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent dark:border-transparent">{translations.navigation.about}</Link>
				</li>
			</ul>
			<div className="items-center flex-shrink-0 hidden lg:flex">
				<button className="self-center px-8 py-3 font-semibold text-gray-800 dark:text-white border-2 border-gray-800 dark:border-white">Contact Us</button>
			</div>
			<button className="p-4 lg:hidden">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white dark:text-white">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</nav>
	)
}

Navbar.displayName = "Navbar"

Navbar.Skeleton = () => (
	<nav className="flex justify-between py-5 px-4 mx-auto">
		<Skeleton className="w-32 h-8" />
		<div className="flex space-x-8">
			<Skeleton className="h-10 w-24" />
			<Skeleton className="h-10 w-24 hidden md:block" />
			<Skeleton className="h-10 w-24 hidden md:block" />
		</div>
		<Skeleton className="h-10 w-32" />
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white dark:text-white">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</nav>
)

export { Navbar }
