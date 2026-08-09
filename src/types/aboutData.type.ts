export interface AboutData {
  portfoliodata: Portfoliodata;
}

export interface Portfoliodata {
  content: string;
  featuredImage: FeaturedImage;
  portfolioAboutData: PortfolioAboutData;
}

export interface PortfolioAboutData {
  experienciLaboral: string;
  cv: Cv;
  profilepicture: Profilepicture;
  email: string;
}
export interface FeaturedImage {
  node: Node;
}

export interface Node {
  altText: string;
  mediaItemUrl: string;
  sizes: string;
  srcSet: string;
}

export interface Cv {
  node: Node;
}

export interface Node {
  mediaItemUrl: string;
}

export interface Profilepicture {
  node: Node2;
}

export interface Node2 {
  altText: string;
  mediaItemUrl: string;
  sizes: string;
  srcSet: string;
}

export interface Extensions {
  debug: any[];
  queryAnalyzer: QueryAnalyzer;
}

export interface QueryAnalyzer {
  keys: string;
  keysLength: number;
  keysCount: number;
  skippedKeys: string;
  skippedKeysSize: number;
  skippedKeysCount: number;
  skippedTypes: any[];
}
