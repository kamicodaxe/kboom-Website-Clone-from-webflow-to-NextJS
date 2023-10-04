import { Post } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import { Skeleton } from '../ui/skeleton';


interface BlogHeaderProps {
	posts: Post[],
}

const BlogHeader: React.FC<BlogHeaderProps> & { Skeleton: React.FC } = ({
	posts,
}) => {
	return (
		<div className="text-gray-800 dark:bg-gray-800 dark:text-gray-50">
			<div className="container grid grid-cols-12 mx-auto">
				<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style={{
					backgroundImage: "url('https://source.unsplash.com/random/640x480')",
					backgroundPosition: 'center center',
					backgroundBlendMode: 'multiply',
					backgroundSize: 'cover',
				}}>
					<Link href={`/blog/${posts[0].slug}`}>
						<div className="flex flex-col items-center p-8 py-12 text-center group hover:bg-gray-200 dark:hover:bg-gray-80">
							<span>12 June</span>
							<h1 className="py-4 text-5xl font-bold">{posts[0].title}</h1>
							<p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 group-hover:translate-x-4">
								<path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
							</svg>
						</div>
					</Link>
				</div>
				<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
					{[...posts.slice(0, 3)].map((post, index) => (
						<Link key={index} href={`/blog/${post.slug}`}>
							<div key={index} className="pt-6 pb-4 space-y-2 group hover:bg-gray-200 dark:hover:bg-gray-800">
								<span>12 June</span>
								<h1 className="text-3xl font-bold">{post.title}</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
								<span className="inline-flex items-center py-2 space-x-2 text-sm text-sky-400">
									<span>Read more</span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-4">
										<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

BlogHeader.Skeleton = () => (
	<div className="dark:bg-gray-800 text-gray-50">
		<div className="container grid grid-cols-12 mx-auto">
			<div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
				<div className="flex flex-col items-center p-8 py-12 text-center">
					<Skeleton className="w-20 h-6 mb-4" />
					<Skeleton className="w-32 h-6 mb-6" />
					<Skeleton className="w-24 h-4" />
				</div>
			</div>
			<div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
				{[...Array(3)].map((_, index) => (
					<div key={index} className="pt-6 pb-4 space-y-8">
						<Skeleton className="w-20 h-4 mb-2" />
						<Skeleton className="w-32 h-6 mb-4" />
						<Skeleton className="w-24 h-4" />
					</div>
				))}
			</div>
		</div>
	</div>
)

export default BlogHeader;
