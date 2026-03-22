import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div
      className="group reveal-up"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative rounded-xl overflow-hidden bg-card mb-4 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out hover:opacity-90 active:scale-95 shadow-lg"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {product.category}
          </p>
          <h3 className="font-medium text-foreground leading-snug">{product.name}</h3>
          <p className="text-sm text-muted-foreground tabular-nums">DKK {product.price}</p>
        </div>
      </Link>
    </div>
  );
}
