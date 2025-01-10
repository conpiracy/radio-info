import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Product {
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

const MOCK_PRODUCTS: Product[] = [
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

const NICHES = ["gambling", "trading", "betting", "social media", "sales"];

export function ProductGrid() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    return selectedNiches.length === 0 || selectedNiches.includes(product.niche);
  });

  const handleViewInsights = (product: Product) => {
    navigate("/insights", { state: { product } });
  };

  const handleNicheChange = (value: string) => {
    setSelectedNiches(prev => {
      if (value === "all") return [];
      if (prev.includes(value)) {
        return prev.filter(niche => niche !== value);
      }
      return [...prev, value];
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Top Products</h1>
        <p className="text-slate-400">
          Discover the highest-performing info products across different niches
        </p>
      </div>

      <div className="mb-8">
        <Select
          value={selectedNiches.length === 0 ? "all" : selectedNiches[0]}
          onValueChange={handleNicheChange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select niches" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All niches</SelectItem>
            {NICHES.map((niche) => (
              <SelectItem key={niche} value={niche}>
                {niche} {selectedNiches.includes(niche) && "✓"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedNiches.length > 0 && (
          <div className="mt-2 flex gap-2 flex-wrap">
            {selectedNiches.map(niche => (
              <Badge 
                key={niche} 
                variant="secondary"
                className="cursor-pointer"
                onClick={() => handleNicheChange(niche)}
              >
                {niche} ×
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewInsights={handleViewInsights}
          />
        ))}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedProduct && (
            <ScrollArea className="h-[80vh] pr-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
                  <Badge variant="secondary" className="bg-slate-800 text-teal-400">
                    {selectedProduct.niche}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Daily Revenue</p>
                    <p className="text-xl font-bold">
                      ${selectedProduct.dailyRevenue.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Members</p>
                    <p className="text-xl font-bold">
                      {selectedProduct.membersCount?.toLocaleString() || "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Ranking</p>
                    <p className="text-xl font-bold">#{selectedProduct.ranking || "N/A"}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-2">Description</p>
                  <p className="text-slate-200">{selectedProduct.description}</p>
                </div>

                {selectedProduct.socialLinks && selectedProduct.socialLinks.length > 0 && (
                  <div>
                    <p className="text-sm text-slate-400 mb-2">Social Links</p>
                    <div className="space-y-1">
                      {selectedProduct.socialLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-teal-400 hover:underline"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}