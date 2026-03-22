import { Link } from "react-router-dom";
import workshopImage from "@/assets/about-workshop.jpg";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="container pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 reveal-up">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl leading-tight">
              Built on care,<br />made to last
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              ShopEase started in a small Brooklyn workshop in 2019 with a simple idea: everyday objects should be thoughtfully made. We partner with independent artisans and small-batch makers who share our belief that quality materials, honest craft, and fair labor aren't luxuries — they're standards.
            </p>
          </div>
          <div className="reveal-up-delay-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={workshopImage}
                alt="Artisan crafting leather goods in our partner workshop"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 className="font-display text-3xl text-center mb-14 reveal-up">What guides us</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {[
              {
                title: "Honest Materials",
                text: "Every product starts with the best raw material we can find — real leather, stoneware clay, organic cotton. No shortcuts.",
              },
              {
                title: "Small-Batch Makers",
                text: "We work with fewer than 20 workshop partners at a time. That means closer relationships and higher standards.",
              },
              {
                title: "Less, Better",
                text: "We'd rather carry eight exceptional products than eighty forgettable ones. Each item earns its place in the collection.",
              },
            ].map((value, i) => (
              <div
                key={value.title}
                className="reveal-up text-center md:text-left space-y-3"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="font-medium text-lg">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center space-y-6 reveal-up">
          <h2 className="font-display text-3xl">See the collection</h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Every piece tells a story. Find the ones that belong in yours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Browse Products
          </Link>
        </div>
      </section>

      <CartDrawer />
      <Footer />
    </div>
  );
};

export default About;
