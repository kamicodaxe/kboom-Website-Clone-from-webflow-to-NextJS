import { Navbar } from "@/components/ui/navbar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<main className="dark:bg-gray-800 text-gray-50">

			<Navbar.Skeleton />

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