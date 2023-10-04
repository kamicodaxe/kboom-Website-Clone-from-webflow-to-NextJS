import { Post } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { Skeleton } from '../ui/skeleton';

// For Demo purpuses only
const MAX_POST_NO = 5

interface BlogPostsProps {
	className?: string
	title: string
	subtitle: string
	imageIndexOffset?: number
	posts: Post[],
	showCount?: number
}

const BlogPosts: React.FC<BlogPostsProps> & { Skeleton: React.FC<{ count: number }> } = ({
	title,
	subtitle,
	posts,
	imageIndexOffset = 0,
	showCount = 4
}) => {
	return (
		<section className="pt-6 sm:pt-8 text-gray-900 dark:text-white">
			<div className="container p-6 mx-auto space-y-8">
				<div className="space-y-2">
					<h2 className="text-3xl font-bold">{title}</h2>
					<p className="font-serif text-sm dark:text-gray-400">{subtitle}</p>
				</div>
				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

					{[...Array(showCount)].map((_, index) => (
						<Link href={`/blog/${posts[index % MAX_POST_NO].slug}`} key={index}
							className={clsx(
								"flex flex-col dark:bg-gray-900",
								"hover:bg-gray-200 dark:hover:bg-gray-800"
							)}
						>
							<span aria-label="Te nulla oportere reprimique his dolorum">
								<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={`https://source.unsplash.com/200x200/?games?${index + imageIndexOffset}`} />
							</span>
							<div className="flex flex-col flex-1 p-6">
								<a href="#" className="text-xs tracki uppercase hover:underline dark:text-sky-400">{posts[index % MAX_POST_NO].author.name}</a>
								<h3 className="flex-1 py-2 text-lg font-semibold leadi">{posts[index % MAX_POST_NO].title}</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 1, 2023</span>
									<span>2.1K views</span>
								</div>
							</div>
						</Link>
					))}

				</div>
			</div>
		</section>
	);
};

BlogPosts.Skeleton = ({ count }) => (
	<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
		{[...Array(count)].map((_, index) => (
			<div key={index} className="col-span-1">
				<Skeleton className="h-52 mb-4" />
				<Skeleton className="h-6 w-2/3 mb-2" />
				<Skeleton className="h-6 w-1/2 mb-2" />
				<Skeleton className="h-6 w-1/3" />
			</div>
		))}
	</div>
)

export default BlogPosts;
