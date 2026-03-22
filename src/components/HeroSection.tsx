import heroImage from "@/assets/hero-products.jpg";

export default function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 items-center min-h-[80vh] py-16 md:py-24">
        <div className="space-y-6 reveal-up">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground reveal-up">
            Curated Essentials
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground reveal-up-delay-1">
            Thoughtfully made, beautifully simple
          </h1>
          <p className="text-lg text-muted-foreground max-w-md reveal-up-delay-2">
            A collection of everyday objects crafted with care — designed to bring warmth and intention to your routine.
          </p>
          <div className="flex gap-4 reveal-up-delay-3">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Browse Collection
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-foreground/15 text-foreground font-medium text-sm hover:bg-muted transition-colors active:scale-[0.97]"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="reveal-up-delay-2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
            <img
              src={heroImage}
              alt="ShopEase curated product collection"
              className="w-full h-[400px] md:h-[520px] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
