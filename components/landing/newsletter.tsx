/**
 * landing->Newsletter
 * Newsletter section of the landing page
 */
import * as React from "react"
import { Button } from "../ui/button"


export interface NewsletterProps { }
const Newsletter: React.FC<NewsletterProps> = () => {
	return (
		<section
			className="bg-gradient-to-b from-black via-transparent to-black bg-cover bg-center py-16"
			style={{
				backgroundImage: 'url("/images/bgnewsletter.png")',
				backgroundRepeat: 'no-repeat',
			}}>
			<div className="container mx-auto space-y-2 pb-4 text-center max-w-3xl">
				<h2 className="text-[3.5rem] font-bold text-white">
					Subscribe to our
					<span className="text-[#2ce5a7] dark:text-[#2ce5a7]"> Newsleter</span>
				</h2>
				<p className="dark:text-[#999] text-[#999] text-lg">
					We know, you can't wait for KBOOM to go live... To make the wait go by a little smoother,
					join our weekly newsletter, offering an immersive dive into the esports world. Whether
					you're a hardcore gamer, a casual fan, or just curious about this booming industry, our
					newsletter has something for everyone.
				</p>
				<br />
				<div className="flex bg-white space-y-0 rounded-br-[3rem] rounded-md overflow-hidden">
					<input placeholder="Your Email Adress" className="flex-1 px-4" />
					<Button variant={"kboom"} className="text-2xl py-8 px-8 mx-auto">Subscribe Now</Button>
				</div>
			</div>
		</section>
	)
}

Newsletter.displayName = "Newsletter"

export { Newsletter }
