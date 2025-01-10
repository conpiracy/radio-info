import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface Product {
  id: string;
  title: string;
  niche: string;
  dailyRevenue: number;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onViewInsights: (product: Product) => void;
}

export function ProductCard({ product, onViewInsights }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-card/50 backdrop-blur-sm border-slate-800/50">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg text-white mb-1">{product.title}</h3>
            <Badge variant="secondary" className="bg-slate-800 text-teal-400">
              {product.niche}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-400 hover:text-white"
            onClick={() => onViewInsights(product)}
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-2">
          <div>
            <p className="text-sm text-slate-400">Daily Revenue</p>
            <p className="text-2xl font-bold text-white">
              ${product.dailyRevenue.toLocaleString()}
            </p>
          </div>
          
          <div>
            <p className="text-sm text-slate-400">Value Proposition</p>
            <p className="text-sm text-slate-300 line-clamp-2">{product.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}