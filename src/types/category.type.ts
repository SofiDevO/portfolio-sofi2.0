import type { Post } from "./post.type";

export interface Category {
  name: string;
  slug: string;
  id?: number;
  databaseId?: number;
}
export type CategoryWithPosts = Category & { posts: Post[] };

export type CategoriesSorted = {
  [key: string]: CategoryWithPosts;
};
