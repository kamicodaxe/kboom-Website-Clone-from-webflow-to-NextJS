/**
 * landing->partners
 * Partners section of the landing page
 */
import * as React from "react"



export interface PartnersProps { }
const Partners: React.FC<PartnersProps> = () => {
	return (
		<section className="bg-gradient-to-tr py-16 from-[#57b8ff] to-[#21ce99]">
			<div className="container mx-auto py-8 space-y-2 text-center">
				<div className="relative pb-8">
					<h2 className="text-[3.5rem] font-bold">Our Partners</h2>
					<img src="/images/line.svg" className="absolute left-[50%]" alt="" />
				</div>
				<p className="dark:text-[#999] text-[#999]">Our trusted Partners helping us in breaking the barriers between Teams and Players!</p>
			</div>
			<div className="container mx-auto grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				<div className="flex flex-col items-center">
					<img src="/images/partner-1.png" className="w-[24rem] " alt="" />
				</div>
				<div className="flex flex-col items-center">
					<img src="/images/partner-2.png" className="w-[24rem] " alt="" />
				</div>
				<div className="flex flex-col items-center">
					<img src="/images/partner-3.png" className="w-[24rem] " alt="" />
				</div>
				<div className="flex flex-col items-center col-span-1 lg:col-span-3">
					<img src="/images/partner-4.png" className="w-[24rem] " alt="" />
				</div>
			</div>
		</section>
	)
}

Partners.displayName = "Partners"

export { Partners }
