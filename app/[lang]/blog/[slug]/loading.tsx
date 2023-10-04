import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<main className="bg-gray-800 text-gray-50">

			<nav className="flex justify-between py-5 px-4 mx-auto">
				<Skeleton className="w-32 h-8" />
				<Skeleton className="h-10 w-32" />
				<Skeleton className="h-10 w-32" />
				<button className="p-4 lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white dark:text-white">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</nav>

			<div className="flex justify-center items-center">
				<div className="container mx-auto p-8">
					<div className="flex flex-col space-y-8">
						<div className="lg:w-3/4 mx-auto ">
							<Skeleton className="w-full h-64 lg:h-96" />
							<div className="mt-6">
								<Skeleton className="w-4/5 h-6" />
							</div>
							<div className="mt-4">
								<Skeleton className="w-3/5 h-4" />
							</div>
						</div>
						<div className="lg:w-3/4 mx-auto ">
							{[...Array(3)].map((_, index) => (
								<div key={index}>
									<Skeleton className="w-full h-4" />
									<div className="mt-2">
										<Skeleton className="w-11/12 h-3" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

		</main>
	)
}