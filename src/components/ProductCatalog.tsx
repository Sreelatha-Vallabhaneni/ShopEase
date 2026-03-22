import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { products, categories } from "@/data/products";
//import ProductCard from "./ProductCard";

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-display text-3xl md:text-4xl text-foreground">
            The Collection
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every piece chosen for quality, character, and a reason to stay.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted border-0 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {/* {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))} */}
          </div>
        ) : (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-lg mb-2">No products match your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="text-primary underline underline-offset-4 hover:opacity-80"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
