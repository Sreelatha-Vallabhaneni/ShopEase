import { useState } from 'react';
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const CheckoutSuccess = () => {
  const [orderNumber] = useState(() => 
    `SE-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container pt-32 pb-24 flex flex-col items-center text-center max-w-lg mx-auto">
        <div className="reveal-up">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
        </div>

        <h1 className="font-display text-3xl md:text-4xl mb-4 reveal-up-delay-1">
          Order Confirmed
        </h1>

        <p className="text-muted-foreground mb-2 reveal-up-delay-2">
          Thank you for your purchase! Your order has been placed successfully.
        </p>

        <div className="bg-card rounded-xl px-6 py-4 mb-8 reveal-up-delay-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Order Number</p>
          <p className="font-semibold text-lg tabular-nums tracking-wide">{orderNumber}</p>
        </div>

        <p className="text-sm text-muted-foreground mb-8 reveal-up-delay-3">
          We've sent a confirmation to your email. Your items will ship within 2-4 business days.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity active:scale-[0.97] reveal-up-delay-3"
        >
          Continue Shopping
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <CartDrawer />
      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
