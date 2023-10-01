/**
 * landing->Features
 * Features section of the landing page
 */
import * as React from "react"
import { Orbitron } from 'next/font/google'
import clsx from "clsx"

const orbitron = Orbitron({ subsets: ['latin'] })


export interface FeaturesProps { }
const Features: React.FC<FeaturesProps> = () => {
	return (
		<section
			className="bg-gradient-to-b from-black via-transparent to-black bg-cover bg-center bg-fixed py-16"
			style={{
				backgroundImage: "linear-gradient(rgba(0, 18, 0, .75), rgba(0, 0, 0, .75)), url('https://uploads-ssl.webflow.com/64fed5a8931f040faf0192d3/64ff20c87afeead0f250d916_wallpaperflare.com_wallpaper.jpg');"
			}}>
			<div className="container mx-auto space-y-2 pb-4 text-center max-w-3xl">
				<h2 className="text-[3.5rem] font-bold text-white">Your Ultimate Fan Experience</h2>
				<p className="dark:text-[#999] text-[#999] text-lg">
					KBOOM makes every moment count. You are notjust a Fan, you are a part of the team !
				</p>
			</div>
			<div className="container mx-auto grid justify-center gap-8 md:grid-cols-2">
				<div className="flex bg-[#141820] p-8 rounded-xl ">
					<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
					<div className="space-y-4">
						<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>Complete Quests</h3>
						<p className="text-[#999] text-lg">
							Complete Quests for your favorite teams and win K-Coins and Gem which you can use to claim your favorit teams Merch !
						</p>
					</div>
				</div>
				<div className="flex bg-[#141820] p-8 rounded-xl ">
					<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
					<div className="space-y-4">
						<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>Complete Quests</h3>
						<p className="text-[#999] text-lg">
							Complete Quests for your favorite teams and win K-Coins and Gem which you can use to claim your favorit teams Merch !
						</p>
					</div>
				</div>
				<div className="flex bg-[#141820] p-8 rounded-xl ">
					<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
					<div className="space-y-4">
						<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>Complete Quests</h3>
						<p className="text-[#999] text-lg">
							Complete Quests for your favorite teams and win K-Coins and Gem which you can use to claim your favorit teams Merch !
						</p>
					</div>
				</div>
				<div className="flex bg-[#141820] p-8 rounded-xl ">
					<img src="/images/features-1.png" className="h-8 pr-4" alt="" />
					<div className="space-y-4">
						<h3 className={clsx("text-white text-4xl font-bold", orbitron.className)}>Complete Quests</h3>
						<p className="text-[#999] text-lg">
							Complete Quests for your favorite teams and win K-Coins and Gem which you can use to claim your favorit teams Merch !
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

Features.displayName = "Features"

export { Features }
