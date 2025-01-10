import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Product } from "@/types/product";

interface ProductDialogProps {
  product: Product | null;
  onOpenChange: (open: boolean) => void;
}

/**
 * ProductDialog displays detailed information about a selected product
 * Shows in a modal dialog with scrollable content
 */
export function ProductDialog({ product, onOpenChange }: ProductDialogProps) {
  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <ScrollArea className="h-[80vh] pr-4">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <Badge variant="secondary" className="bg-slate-800 text-teal-400">
                {product.niche}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-400">Daily Revenue</p>
                <p className="text-xl font-bold">
                  ${product.dailyRevenue.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Members</p>
                <p className="text-xl font-bold">
                  {product.membersCount?.toLocaleString() || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Ranking</p>
                <p className="text-xl font-bold">#{product.ranking || "N/A"}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-2">Description</p>
              <p className="text-slate-200">{product.description}</p>
            </div>

            {product.socialLinks && product.socialLinks.length > 0 && (
              <div>
                <p className="text-sm text-slate-400 mb-2">Social Links</p>
                <div className="space-y-1">
                  {product.socialLinks.map((link, i) => (
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
      </DialogContent>
    </Dialog>
  );
}