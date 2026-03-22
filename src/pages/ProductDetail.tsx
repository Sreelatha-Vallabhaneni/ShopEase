import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center container">
          <h1 className="font-display text-3xl mb-4">Product not found</h1>
          <Link to="/" className="text-primary underline underline-offset-4">
            Back to shop
          </Link>
        </div>
        <CartDrawer />
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container pt-24 pb-16">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to shop
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Image */}
          <div className="reveal-up">
            <div className="rounded-2xl overflow-hidden bg-card aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center space-y-6 reveal-up-delay-1">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-2xl font-semibold tabular-nums">DKK {product.price}</p>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              {product.description}
            </p>

            {/* Details list */}
            <div className="space-y-3 border-t border-b py-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Category</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-primary font-medium">In Stock</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free over DKK 75</span>
              </div>
            </div>

            {/* Quantity & Add to cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-muted rounded-full px-3 py-2">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-border transition-colors active:scale-95"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center tabular-nums font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-border transition-colors active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-display text-2xl mb-8">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default ProductDetail;
