export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  author: string;
  readTime: string;
  likes: number;
  content?: BlogPostContent;
}

export interface BlogPostContent {
  introduction: string;
  keyPoints: string[];
  expertAdvice: string;
  conclusion: string;
  recommendedProducts?: string[];
} 