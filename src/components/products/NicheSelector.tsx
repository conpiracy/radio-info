import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface NicheSelectorProps {
  selectedNiches: string[];
  onNicheChange: (value: string) => void;
  niches: string[];
}

/**
 * NicheSelector component allows users to filter products by multiple niches
 * Displays selected niches as removable badges below the dropdown
 */
export function NicheSelector({ selectedNiches, onNicheChange, niches }: NicheSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Select
        value={selectedNiches.length === 0 ? "all" : selectedNiches[0]}
        onValueChange={(value) => {
          onNicheChange(value);
          setIsOpen(true); // Keep the dropdown open after selection
        }}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select niches" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All niches</SelectItem>
          {niches.map((niche) => (
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
              onClick={() => onNicheChange(niche)}
            >
              {niche} ×
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}