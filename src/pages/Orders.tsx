import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MenuSection } from '@/components/MenuSection';
import { LunchBoxSubscription } from '@/components/LunchBoxSubscription';
import { ShoppingBag, Clock, Truck } from 'lucide-react';

const Orders = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Order <span className="text-gradient">Online</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enjoy our Enso dishes from the comfort of your home
            </p>
          </div>

          {/* Order Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-strong p-8 rounded-2xl shadow-3d text-center hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Pickup</h3>
              <p className="text-muted-foreground mb-4">Ready in 20-30 minutes</p>
              <Button className="gradient-primary text-primary-foreground w-full">
                Order for Pickup
              </Button>
            </div>

            <div className="glass-strong p-8 rounded-2xl shadow-3d text-center hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Delivery</h3>
              <p className="text-muted-foreground mb-4">45-60 minutes</p>
              <Button className="gradient-primary text-primary-foreground w-full">
                Order Delivery
              </Button>
            </div>

            <div className="glass-strong p-8 rounded-2xl shadow-3d text-center hover:shadow-elevated transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Reserve</h3>
              <p className="text-muted-foreground mb-4">Book a table</p>
              <Button className="gradient-primary text-primary-foreground w-full">
                Make Reservation
              </Button>
            </div>
          </div>

          {/* Menu Section */}
          <MenuSection />
        </div>

        {/* Lunch Box Subscription */}
        <LunchBoxSubscription />
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
