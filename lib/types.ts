import { categories, posts, tags } from "@/app/api/database";


export type Post = typeof posts[0]
export type Category = typeof categories[0]
export type Tag = typeof tags[0]