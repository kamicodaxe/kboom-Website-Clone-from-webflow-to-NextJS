/**
 * landing->Engage
 * Engage section of the landing page
 */
import * as React from "react"
import { Button } from "../ui/button"



export interface EngageProps { }

const Engage: React.FC<EngageProps> = () => {
	return (
		<section className="bg-[#262c3a] py-16 flex flex-col md:flex-row">
			<div className="container mx-auto flex flex-col py-8 space-y-2">
				<div className="relative pb-8">
					<h2 className="text-[3.5rem] font-bold text-white">Engage.
						<span className="text-[#2ce5a7] dark:text-[#2ce5a7] capitalize"> Win</span>. Repeat</h2>
				</div>
				<p className="dark:text-[#999] text-[#999] pb-8">
					KBOOM makes following your favorite team's and engaging with them easy. Choose your teams, add them to your roster, and engage with each of their Quests. Completing multiple Quests can get you ranked up in your teams favor !
					<br />
					<br />
					But be warned, not all Quests are created equal...
				</p>
				<Button variant={"kboom"} className="text-2xl py-8 px-8">Explore More</Button>
			</div>
			<div className="container flex justify-center mt-8 md:mt-8">
				<img src="/images/phone.png" className="w-[24rem] " alt="" />
			</div>
		</section>
	)
}

Engage.displayName = "Engage"

export { Engage }
