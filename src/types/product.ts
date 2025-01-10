export interface Product {
  id: string;
  title: string;
  niche: string;
  dailyRevenue: number;
  description: string;
  membersCount?: number;
  ranking?: number;
  socialLinks?: string[];
  trafficSource?: string;
}