import { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { SubscriptionContactDialog } from './SubscriptionContactDialog';

const plans = [
  {
    name: "Chef's Luxury Meal Set",
    price: "130 AED",
    description: "For the Best Health",
    detail: "A meal you can enjoy every day for a lifetime, designed using Chef Takumi's nutritional expertise.",
    image: "/src/assets/menu/luxury-bento.jpg",
  },
  {
    name: "High Standard Meal Set",
    price: "80 AED",
    description: "Premium Experience",
    detail: "A premium meal that brings the elegance of Japanese cuisine to your daily lunchtime.",
    image: "/src/assets/menu/premium-bento.jpg",
    popular: true,
  },
  {
    name: "Trial Meal Set",
    price: "65 AED",
    description: "Authentic Japanese Flavors",
    detail: "A reasonably priced meal that allows you to enjoy authentic Japanese flavors from Enso.",
    image: "/src/assets/menu/trial-bento.jpg",
  },
];

const deliveryOptions = [
  { days: 4, meals: 19, label: "4 days/week → 19 meals/month" },
  { days: 5, meals: 22, label: "5 days/week → 22 meals/month" },
  { days: 6, meals: 26, label: "6 days/week → 26 meals/month" },
  { days: "custom", label: "Custom: from once a week" },
];

export const LunchBoxSubscription = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <>
      <SubscriptionContactDialog 
        open={isContactDialogOpen} 
        onOpenChange={setIsContactDialogOpen} 
      />
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Monthly <span className="text-gradient">Lunch Box</span> Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-2">
            We have officially finalized our lunch box subscription plans. Fresh, healthy Japanese meals delivered to your door.
          </p>
          <p className="text-sm text-muted-foreground">
            Selected plan price + delivery fee (5–35 AED depending on location)
          </p>
          <p className="text-sm text-primary font-semibold mt-2">
            🎁 One-week trial available!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const planId = plan.name.toLowerCase().includes('luxury') ? 'luxury' : 
                          plan.name.toLowerCase().includes('standard') ? 'premium' : 'trial';
            
            return (
              <Link
                key={index}
                to={`/lunch-box/${planId}`}
                className={`glass-strong rounded-2xl shadow-3d overflow-hidden transition-all duration-300 hover:shadow-elevated hover:scale-105 block ${
                  plan.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.popular && (
                  <div className="gradient-primary text-primary-foreground text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-primary font-semibold mb-3">{plan.description}</p>
                  <div className="text-3xl font-bold mb-4">
                    {plan.price}
                    <span className="text-sm text-muted-foreground font-normal"> + delivery</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.detail}</p>
                  <Button className="w-full gradient-primary text-primary-foreground">
                    View Details
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Delivery Plans */}
        <div className="glass p-8 md:p-12 rounded-2xl shadow-3d mb-12">
          <h3 className="text-3xl font-display font-bold mb-6 text-center">
            Delivery <span className="text-gradient">Options</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="glass p-4 rounded-lg flex items-center">
                <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium">{option.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Closed on Sundays • Delivered by our exclusive contracted riders
          </p>
        </div>

        {/* What We Need */}
        <div className="glass-strong p-8 md:p-12 rounded-2xl shadow-3d text-center">
          <h3 className="text-3xl font-display font-bold mb-6">
            Ready to <span className="text-gradient">Subscribe?</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us with the following information to get started:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
            <div className="glass p-4 rounded-lg">
              <Check className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="font-semibold">Your preferred plan</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <Check className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="font-semibold">Number of people</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <Check className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="font-semibold">Delivery days per week</p>
            </div>
            <div className="glass p-4 rounded-lg">
              <Check className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="font-semibold">Delivery address</p>
            </div>
            <div className="glass p-4 rounded-lg md:col-span-2">
              <Check className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="font-semibold">Contract duration (number of months)</p>
            </div>
          </div>
          <Button 
            size="lg" 
            className="gradient-primary text-primary-foreground"
            onClick={() => setIsContactDialogOpen(true)}
          >
            Contact Us to Subscribe
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Prices may vary weekly based on ingredient costs. We'll provide a uniform weekly rate.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};