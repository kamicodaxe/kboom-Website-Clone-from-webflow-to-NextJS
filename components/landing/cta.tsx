/**
 * landing->CTA
 * CTA section of the landing page
 */
import * as React from "react"
import { Orbitron } from 'next/font/google'
import clsx from "clsx"
import { Button } from "../ui/button";

const orbitron = Orbitron({ subsets: ['latin'] })


export interface CTAProps { }

const CTA: React.FC<CTAProps> = () => {
	return (
		<section className="bg-[#262c3a] flex flex-col items-stretch md:flex-row">
			<div className="overflow-hidden relative group transition-transform duration-300">
				<div className="absolute flex flex-col h-full w-full justify-center text-center space-y-8 z-10">
					<img
						className="w-32 mx-auto"
						src="/images/ctaic-apple.png"
						alt="" />
					<p className={clsx("text-white text-center text-3xl font-semibold", orbitron.className)}>App Store</p>
					<Button variant={"kboom"} className="text-2xl py-8 px-8 mx-auto">Download</Button>
				</div>
				<img src="/images/cta-apple.png" className="w-full duration-5000 group-hover:scale-150" alt="" />
			</div>
			<div className="overflow-hidden relative group transition-transform duration-300">
				<div className="absolute flex flex-col h-full w-full justify-center text-center space-y-8 z-10">
					<img
						className="w-32 mx-auto"
						src="/images/ctaic-google.png"
						alt="" />
					<p className={clsx("text-white text-center text-3xl font-semibold mt-8", orbitron.className)}>Google Play</p>
					<Button variant={"kboom"} className="text-2xl py-8 px-8 mx-auto">Download</Button>
				</div>
				<img src="/images/cta-google.png" className="w-full duration-5000 group-hover:scale-150" alt="" />
			</div>
			<div className="overflow-hidden relative group transition-transform duration-300">
				<div className="absolute flex flex-col h-full w-full justify-center text-center space-y-8 z-10">
					<img
						className="w-32 mx-auto"
						src="/images/ctaic-web.png"
						alt="" />
					<p className={clsx("text-white text-center text-3xl font-semibold mt-8", orbitron.className)}>Desktop & Web</p>
					<Button variant={"kboom"} className="text-2xl py-8 px-8 mx-auto">Get Started</Button>
				</div>
				<img src="/images/ctabg-web.png" className="w-full duration-5000 group-hover:scale-150" alt="" />
			</div>
		</section>
	);
};



CTA.displayName = "CTA"

export { CTA }
