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
}

export interface BlogPostContent {
  introduction: string;
  keyPoints: string[];
  expertAdvice: string;
  conclusion: string;
} 