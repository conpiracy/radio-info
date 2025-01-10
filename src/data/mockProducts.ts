import { Product } from "@/types/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Kaizen Platinum",
    niche: "gambling",
    dailyRevenue: 15445,
    description: "We help you make money in crypto",
    membersCount: 785,
    ranking: 3,
    socialLinks: ["https://twitter.com/kaizen", "https://instagram.com/kaizen"],
    trafficSource: "organic"
  },
  {
    id: "2",
    title: "Social Army",
    niche: "trading",
    dailyRevenue: 55334,
    description: "Ready To Start Earning More as a TikTok Shop Affiliate?",
    membersCount: 231,
    ranking: 42,
    trafficSource: "tiktok"
  },
];

export const NICHES = ["gambling", "trading", "betting", "social media", "sales"];