import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const shipping = totalPrice >= 75 ? 0 : 8.5;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shipping + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate("/checkout/success");
    }, 2000);
  };

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container pt-32 text-center">
          <h1 className="font-display text-3xl mb-4">Your cart is empty</h1>
          <a href="/" className="text-primary underline underline-offset-4">Continue shopping</a>
        </div>
        <CartDrawer />
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow";

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container pt-24 pb-24">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="font-display text-3xl md:text-4xl mb-10 reveal-up">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-12">
          {/* Form fields */}
          <div className="lg:col-span-3 space-y-8 reveal-up-delay-1">
            {/* Contact */}
            <div>
              <h2 className="font-medium text-lg mb-4">Contact</h2>
              <input type="email" required placeholder="Email address" value={form.email} onChange={update("email")} className={inputClass} />
            </div>

            {/* Shipping */}
            <div className="space-y-4">
              <h2 className="font-medium text-lg">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" required placeholder="First name" value={form.firstName} onChange={update("firstName")} className={inputClass} />
                <input type="text" required placeholder="Last name" value={form.lastName} onChange={update("lastName")} className={inputClass} />
              </div>
              <input type="text" required placeholder="Street address" value={form.address} onChange={update("address")} className={inputClass} />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" required placeholder="City" value={form.city} onChange={update("city")} className={inputClass} />
                <input type="text" required placeholder="ZIP / Postal" value={form.zip} onChange={update("zip")} className={inputClass} />
              </div>
            </div>

            {/* Payment */}
            <div className="space-y-4">
              <h2 className="font-medium text-lg">Payment</h2>
              <input type="text" required placeholder="Card number" value={form.cardNumber} onChange={update("cardNumber")} className={inputClass} />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" required placeholder="MM / YY" value={form.expiry} onChange={update("expiry")} className={inputClass} />
                <input type="text" required placeholder="CVC" value={form.cvc} onChange={update("cvc")} className={inputClass} />
              </div>
              <p className="text-xs text-muted-foreground">This is a simulated checkout. No real charges will be made.</p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2 reveal-up-delay-2">
            <div className="bg-card rounded-2xl p-6 sticky top-24 space-y-5">
              <h2 className="font-medium text-lg">Order Summary</h2>

              <div className="space-y-4 max-h-60 overflow-y-auto">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3 items-center">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                    </div>
                    <p className="text-sm tabular-nums">DKK {(product.price * quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="tabular-nums">DKK {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="tabular-nums">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="tabular-nums">Dkk {tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-base pt-2 border-t">
                  <span>Total</span>
                  <span className="tabular-nums">DKK {grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={processing}
                className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-60"
              >
                {processing ? "Processing..." : `Pay DKK ${grandTotal.toFixed(2)}`}
              </button>
            </div>
          </div>
        </form>
      </div>
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default Checkout;
