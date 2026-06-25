import type { Category } from "./category.type";
import type { Author } from "./author.type";

export interface Post {
  title: string;
  id?: string;
  content?: string;
  slug: string;
  excerpt: string;
  date?: string;
  image?: FeaturedImage;
  categories?: Category[];
  author?: Author;
  seo?: Seo;
  isSticky?: boolean;
  altdescription?: string;
  commentCount?: number;
}

export type FeaturedImage = {
  mediaItemUrl: string;
  srcSet?: string;
  sizes?: string;
  altText?: string;
  link?: string;
  sourceUrl?: string;
};

type Seo = {
  cornerstone?: boolean;
  readingTime?: number;
  metaDesc?: string;
};
