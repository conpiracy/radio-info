import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { NicheSelector } from "./products/NicheSelector";
import { ProductDialog } from "./products/ProductDialog";
import { Product } from "@/types/product";
import { MOCK_PRODUCTS, NICHES } from "@/data/mockProducts";

/**
 * ProductGrid is the main component for displaying the product listing
 * It manages the product filtering, selection, and navigation logic
 */
export function ProductGrid() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedNiches, setSelectedNiches] = useState<string[]>([]);

  // Filter products based on selected niches
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
        <NicheSelector
          selectedNiches={selectedNiches}
          onNicheChange={handleNicheChange}
          niches={NICHES}
        />
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

      <ProductDialog 
        product={selectedProduct}
        onOpenChange={() => setSelectedProduct(null)}
      />
    </div>
  );
}