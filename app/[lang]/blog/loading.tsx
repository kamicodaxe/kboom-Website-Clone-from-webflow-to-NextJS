import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
	return (
		<main className="p-6 mx-auto space-y-8">

			<div className="bg-gray-800 text-gray-50">
				<div className="container grid grid-cols-12 mx-auto">
					<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-gray-700 lg:col-span-6 lg:h-auto">
						<div className="flex flex-col items-center p-8 py-12 text-center">
							<Skeleton className="w-20 h-6 mb-4" />
							<Skeleton className="w-32 h-6 mb-6" />
							<Skeleton className="w-24 h-4" />
						</div>
					</div>
					<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
						{[...Array(3)].map((_, index) => (
							<div key={index} className="pt-6 pb-4 space-y-2">
								<Skeleton className="w-20 h-4 mb-2" />
								<Skeleton className="w-32 h-6 mb-4" />
								<Skeleton className="w-24 h-4" />
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
				{[...Array(8)].map((_, index) => (
					<div key={index} className="col-span-1">
						<Skeleton className="h-52 mb-4" />
						<Skeleton className="h-6 w-2/3 mb-2" />
						<Skeleton className="h-6 w-1/2 mb-2" />
						<Skeleton className="h-6 w-1/3" />
					</div>
				))}
			</div>


		</main>
	)
}