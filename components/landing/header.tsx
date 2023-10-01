/**
 * landing->Header
 * Header section of the landing page
 */
import * as React from "react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="">
			<nav className="flex justify-between py-5 px-4 mx-auto">
				<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center">
					<img
						src="https://uploads-ssl.webflow.com/64fed5a8931f040faf0192d3/64fed83b6abe46916dc825a7_logo%20(1).png"
						loading="lazy"
						width="209"
						className="pl-2 pb-2"
						alt="" ></img>
				</a>

				<ul className="items-stretch hidden space-x-6 lg:flex text-xl font-bold text-white">
					<li className="flex">
						<Link rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent border-[#2ce5a7] text-[#2ce5a7] dark:text-[#2ce5a7] dark:border-[#2ce5a7]">Home</Link>
					</li>
					<li className="flex">
						<Link rel="noopener noreferrer" href="/blog" className="flex items-center px-4 -mb-1 border-b-2 border-transparent dark:border-transparent">Blog</Link>
					</li>
					<li className="flex">
						<Link rel="noopener noreferrer" href="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent dark:border-transparent">About</Link>
					</li>
				</ul>
				<div className="items-center flex-shrink-0 hidden lg:flex">
					<button className="self-center px-8 py-3 font-semibold text-white dark:text-white border-2 border-white">Contact Us</button>
				</div>
				<button className="p-4 lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white dark:text-white">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</nav>

			<section className="text-white dark:text-white">
				<div className="container mx-auto flex flex-col items-center pt-16 text-center max-w-5xl">
					<h1 className="text-5xl font-[800] md:leading-[82px] md:text-7xl">Behind Every
						<span className="text-[#2ce5a7] dark:text-[#2ce5a7] capitalize"> Team </span> <br className="hidden md:block" />
						Is A Roar Of <span className="text-[#2ce5a7] dark:text-[#2ce5a7]"> Fans</span>
					</h1>
					<p className="px-8 mb-16 text-lg text-[#999] ">
						Fan's are the backbone of every team, but can they rise up to the challenges ahead? Enter the world of KBOOM and compete for your favorite teams.
					</p>
					<Button variant={"kboom"} className="text-2xl py-8 px-8">Get Started on your browser</Button>
					<div className="flex flex-wrap justify-center space-y-8 md:space-y-0">
						<img className="mx-6 h-16" src="/images/app-store.png" alt="" />
						<img className="mx-6 h-16" src="/images/playstore.png" alt="" />
					</div>
				</div>
				<img src='/images/banner-img.png' />
			</section>

		</header>
	)
}

Header.displayName = "Header"

export { Header }
