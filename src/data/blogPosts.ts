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

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Baby Products Every New Parent Needs in 2024",
    excerpt: "From smart monitors to eco-friendly diapers, discover the must-have items that will make your parenting journey smoother and more enjoyable.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 15, 2024",
    category: "Shopping Guide",
    slug: "essential-baby-products-2024",
    author: "Sarah Johnson",
    readTime: "8 min read",
    likes: 245
  },
  {
    id: 2,
    title: "The Science of Baby Sleep: Expert Tips for Better Nights",
    excerpt: "Learn evidence-based strategies from pediatric sleep experts to help your baby (and you) get the rest you need.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 12, 2024",
    category: "Parenting Tips",
    slug: "baby-sleep-science",
    author: "Dr. Emily Chen",
    readTime: "10 min read",
    likes: 189
  },
  {
    id: 3,
    title: "Budget-Friendly Baby Gear: Quality Products Under $100",
    excerpt: "Smart shopping strategies to find high-quality baby essentials without breaking the bank. Plus, our top picks for affordable gear.",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 10, 2024",
    category: "Budget Tips",
    slug: "budget-friendly-baby-gear",
    author: "Michael Brown",
    readTime: "6 min read",
    likes: 156
  },
  {
    id: 4,
    title: "Baby's First Year: Milestones and Development Guide",
    excerpt: "A comprehensive month-by-month guide to your baby's physical, cognitive, and social development during their first year.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 8, 2024",
    category: "Development",
    slug: "baby-first-year-milestones",
    author: "Dr. Lisa Martinez",
    readTime: "12 min read",
    likes: 278
  },
  {
    id: 5,
    title: "Best Baby Carriers of 2024: Comfort and Safety Compared",
    excerpt: "Our hands-on review of the top baby carriers, focusing on comfort, safety features, and ease of use for both parents and babies.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 5, 2024",
    category: "Product Reviews",
    slug: "best-baby-carriers-2024",
    author: "Jessica Taylor",
    readTime: "9 min read",
    likes: 167
  },
  {
    id: 6,
    title: "Common Baby Health Concerns: When to Call the Doctor",
    excerpt: "A practical guide to recognizing and managing common baby health issues, with expert advice on when to seek medical attention.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 3, 2024",
    category: "Baby Health",
    slug: "baby-health-concerns",
    author: "Dr. Emily Chen",
    readTime: "11 min read",
    likes: 203
  },
  {
    id: 7,
    title: "Eco-Friendly Baby Products: Sustainable Choices for Your Little One",
    excerpt: "Discover environmentally conscious baby products that are safe for your baby and better for the planet.",
    image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Mar 1, 2024",
    category: "Shopping Guide",
    slug: "eco-friendly-baby-products",
    author: "Sarah Johnson",
    readTime: "7 min read",
    likes: 145
  },
  {
    id: 8,
    title: "Building Your Baby's Immune System: Expert Tips",
    excerpt: "Learn about natural ways to support your baby's immune system development and when to consider vaccinations.",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    date: "Feb 28, 2024",
    category: "Baby Health",
    slug: "baby-immune-system",
    author: "Dr. Lisa Martinez",
    readTime: "8 min read",
    likes: 178
  }
]; 