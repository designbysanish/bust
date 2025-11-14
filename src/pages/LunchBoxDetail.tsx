import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import luxuryBento from '@/assets/menu/luxury-bento.jpg';
import premiumBento from '@/assets/menu/premium-bento.jpg';
import trialBento from '@/assets/menu/trial-bento.jpg';

const lunchBoxPlans = [
  {
    id: 'luxury',
    name: "Chef's Luxury Meal Set",
    nameJp: "シェフのプレミアム弁当",
    price: "130 AED",
    description: "For the Best Health",
    detail: "A meal you can enjoy every day for a lifetime, designed using Chef Takumi's nutritional expertise.",
    image: luxuryBento,
    detailedDescription: "Chef Takumi's ultimate expression of balanced nutrition and exquisite taste. Each lunch box contains 8-10 carefully selected dishes that rotate daily, ensuring you never get bored while receiving optimal nutrition. Features premium proteins like grilled fish, wagyu beef, and free-range chicken, complemented by seasonal vegetables, house-made pickles, and perfectly cooked Japanese rice. Every element is chosen for both its nutritional value and flavor harmony.",
    benefits: [
      "8-10 different dishes daily for variety",
      "Premium proteins: wagyu beef, fresh fish, free-range chicken",
      "Nutritionally balanced by our expert chef",
      "Seasonal organic vegetables",
      "Perfect for long-term daily enjoyment"
    ]
  },
  {
    id: 'premium',
    name: "High Standard Meal Set",
    nameJp: "円相のお弁当 松",
    price: "80 AED",
    description: "Premium Experience",
    detail: "A premium meal that brings the elegance of Japanese cuisine to your daily lunchtime.",
    image: premiumBento,
    popular: true,
    detailedDescription: "Our most popular lunch box plan brings restaurant-quality Japanese cuisine to your office or home. Featuring 6-7 beautifully prepared dishes that showcase traditional Japanese cooking techniques. Each box includes a main protein (teriyaki chicken, miso fish, or ginger pork), three seasonal side dishes, perfectly steamed rice, and miso soup. The presentation is as important as the taste - each box is a work of art.",
    benefits: [
      "6-7 dishes featuring traditional Japanese flavors",
      "Restaurant-quality presentation",
      "Balanced main protein with complementary sides",
      "Most popular choice among our customers",
      "Excellent value for premium quality"
    ]
  },
  {
    id: 'trial',
    name: "Trial Meal Set",
    nameJp: "円相のお弁当 竹",
    price: "65 AED",
    description: "Authentic Japanese Flavors",
    detail: "A reasonably priced meal that allows you to enjoy authentic Japanese flavors from Enso.",
    image: trialBento,
    detailedDescription: "Perfect for those new to Japanese lunch boxes or looking for an affordable daily option. Don't let the price fool you - this box still features 5-6 delicious, home-style Japanese dishes prepared with the same care and quality ingredients as our premium options. Includes a satisfying main dish, two seasonal sides, rice, and soup. A great way to experience authentic Japanese flavors without breaking the bank.",
    benefits: [
      "5-6 authentic Japanese home-style dishes",
      "Same quality ingredients as premium plans",
      "Perfect introduction to Japanese lunch boxes",
      "Great value for money",
      "Ideal for daily lunch routine"
    ]
  },
];

const deliveryOptions = [
  { days: "4", meals: "19", label: "4 days/week → 19 meals/month" },
  { days: "5", meals: "22", label: "5 days/week → 22 meals/month" },
  { days: "6", meals: "26", label: "6 days/week → 26 meals/month" },
  { days: "custom", meals: "varies", label: "Custom: from once a week" },
];

const LunchBoxDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const plan = lunchBoxPlans.find((p) => p.id === id);

  if (!plan) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Plan not found</h2>
          <Button onClick={() => navigate('/orders')}>Back to Menu</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="glass-strong rounded-2xl overflow-hidden shadow-3d h-96 lg:h-auto">
              <img 
                src={plan.image} 
                alt={plan.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                {plan.popular && (
                  <div className="inline-block gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-3">
                    MOST POPULAR
                  </div>
                )}
                <span className="text-sm text-primary font-semibold block">Monthly Lunch Box Plan</span>
                <h1 className="text-4xl font-display font-bold mt-2 mb-2">{plan.name}</h1>
                <p className="text-lg text-muted-foreground/80 mb-4">{plan.nameJp}</p>
                <p className="text-lg text-primary font-semibold">{plan.description}</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-sm font-semibold mb-2">About This Plan</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.detailedDescription}
                </p>
                <h4 className="text-sm font-semibold mb-2 mt-4">What's Included:</h4>
                <ul className="space-y-2">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-6 rounded-xl space-y-4">
                <div>
                  <div className="text-3xl font-bold mb-2">
                    {plan.price}
                    <span className="text-sm text-muted-foreground font-normal"> + delivery (5-35 AED)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Prices may vary weekly based on ingredient costs. We'll provide a uniform weekly rate.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Delivery Options:</h4>
                  <div className="space-y-2">
                    {deliveryOptions.map((option, index) => (
                      <div key={index} className="glass p-2 rounded-lg flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{option.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Closed on Sundays</p>
                </div>

                <Button
                  className="w-full gradient-primary text-primary-foreground"
                  size="lg"
                  onClick={() => navigate('/orders')}
                >
                  Contact Us to Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Other Plans */}
          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold mb-8">
              Other <span className="text-gradient">Plans</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lunchBoxPlans.filter(p => p.id !== plan.id).map((otherPlan) => (
                <Link
                  key={otherPlan.id}
                  to={`/lunch-box/${otherPlan.id}`}
                  className="glass p-6 rounded-xl shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105"
                >
                  <div className="h-40 rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={otherPlan.image} 
                      alt={otherPlan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{otherPlan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{otherPlan.detail}</p>
                  <span className="text-primary font-bold">{otherPlan.price} + delivery</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LunchBoxDetail;