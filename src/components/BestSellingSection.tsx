import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import bestseller1 from '@/assets/bestseller-1.jpg';
import bestseller2 from '@/assets/bestseller-2.jpg';
import bestseller3 from '@/assets/bestseller-3.jpg';

const dishes = [
  {
    id: 'mashroom-udon-with-yuzu-citrus',
    name: 'Mushroom Udon with Yuzu Citrus',
    description: 'The chewy texture of udon noodles and the savory, umami-rich flavor of mushrooms with the distinct, and aromatic tang of yuzu citrus',
    price: '69.00 AED',
    rating: 5,
    image: bestseller1,
    category: 'Chef\'s Special',
  },
  {
    id: 'premium-dashimaki-omelette',
    name: 'Premium Dashimaki omelette',
    description: 'A "premium" dashimaki omelette is a high-quality, refined version of the traditional Japanese rolled omelette ',
    price: '69.00 AED',
    rating: 5,
    image: bestseller2,
    category: 'Chef\'s Special',
  },
  {
    id: 'karaage-japanese-fried-chiken',
    name: 'Karaage Japanese Fried chiken',
    description: 'Chicken thigh, potato starch or cornstarch, and deep-fried',
    price: '69.00 AED',
    rating: 5,
    image: bestseller3,
    category: 'Starters',
  },
];

export const BestSellingSection = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Best <span className="text-gradient">Sellers</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most loved dishes, handpicked by our guests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <Link
              key={index}
              to={`/menu/${dish.id}`}
              className="glass-strong rounded-2xl shadow-3d hover:shadow-elevated hover:scale-105 transition-all duration-300 group overflow-hidden block"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <div className="flex">
                    {[...Array(dish.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: dish.id,
                        name: dish.name,
                        description: dish.description,
                        price: dish.price,
                        category: dish.category,
                      });
                    }}
                  >
                    Order
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/orders">
            <Button size="lg" className="gradient-primary text-primary-foreground hover:shadow-elevated">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
