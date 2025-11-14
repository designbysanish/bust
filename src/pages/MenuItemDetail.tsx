import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { getMenuItemById, getMenuItemsByCategory } from '@/data/menuData';
import { useToast } from '@/hooks/use-toast';

const MenuItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const item = id ? getMenuItemById(id) : undefined;

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Item not found</h2>
          <Button onClick={() => navigate('/orders')}>Back to Menu</Button>
        </div>
      </div>
    );
  }

  const similarItems = item 
    ? getMenuItemsByCategory(item.category).filter(i => i.id !== item.id).slice(0, 3)
    : [];

  const handleAddToCart = () => {
    if (!item) return;
    
    addToCart({
      id: item.id,
      name: item.nameEn,
      description: item.description,
      price: `${item.price} AED`,
      category: item.category,
    }, quantity);
    
    toast({
      title: "Added to cart",
      description: `${quantity}x ${item.nameEn} added to your cart`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/orders')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Menu
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="glass-strong rounded-2xl overflow-hidden shadow-3d h-96 lg:h-auto">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.nameEn}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-6xl">🍽️</span>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <span className="text-sm text-primary font-semibold">{item.category}</span>
                <h1 className="text-4xl font-display font-bold mt-2 mb-2">{item.nameEn}</h1>
                <p className="text-lg text-muted-foreground/80 mb-4">{item.nameJp}</p>
                <p className="text-lg text-muted-foreground">{item.description}</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <h3 className="text-sm font-semibold mb-2">Detailed Description</h3>
                <p className="text-sm text-muted-foreground">
                  {item.detailedDescription || `Our ${item.nameEn.toLowerCase()} is carefully prepared using the finest ingredients. Each dish is crafted with attention to detail, ensuring authentic flavors and exceptional quality.`}
                </p>
              </div>

              <div className="glass p-6 rounded-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{item.price} AED</span>
                </div>

                <div>
                  <label className="text-sm font-semibold mb-2 block">Quantity</label>
                  <div className="flex items-center gap-3 glass rounded-lg p-2 w-fit">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  className="w-full gradient-primary text-primary-foreground"
                  size="lg"
                >
                  Add to Cart - {(parseFloat(item.price) * quantity).toFixed(2)} AED
                </Button>
              </div>
            </div>
          </div>

          {/* Similar Items */}
          {similarItems.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold mb-8">
                You Might Also <span className="text-gradient">Like</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarItems.map((similar) => (
                  <Link
                    key={similar.id}
                    to={`/menu/${similar.id}`}
                    className="glass p-6 rounded-xl shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105"
                  >
                    <div className="h-40 rounded-lg mb-4 overflow-hidden">
                      {similar.image ? (
                        <img 
                          src={similar.image} 
                          alt={similar.nameEn}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                          <span className="text-4xl">🍽️</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-display font-bold mb-2">{similar.nameEn}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{similar.description}</p>
                    <span className="text-primary font-bold">{similar.price} AED</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuItemDetail;