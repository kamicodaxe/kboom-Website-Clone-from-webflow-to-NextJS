import BlogPosts from "@/components/blog/blog-posts";
import BlogHeader from "@/components/blog/header";
import { Navbar } from "@/components/ui/navbar";

export default function Loading() {
	return (
		<main className="p-6 mx-auto space-y-8">
			<Navbar.Skeleton />
			<BlogHeader.Skeleton />
			<BlogPosts.Skeleton count={4} />
			<BlogPosts.Skeleton count={8} />
		</main>
	)
}