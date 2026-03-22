import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container pt-28 pb-24">
        <div className="text-center mb-16 space-y-3 reveal-up">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in Touch</p>
          <h1 className="font-display text-4xl md:text-5xl">We'd love to hear from you</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a question about an order, a product, or just want to say hello? Drop us a line.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8 reveal-up-delay-1">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">hello@shopease.co</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Phone</h3>
                <p className="text-sm text-muted-foreground">+45 12345678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm mb-1">Studio</h3>
                <p className="text-sm text-muted-foreground">
                  Copenhagen<br />København, DK 1050
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5 reveal-up-delay-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Contact;
