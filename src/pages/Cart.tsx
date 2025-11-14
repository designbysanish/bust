import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const recommendedItems = [
  { id: 'rec1', name: 'Edamame', price: '24.00 AED', category: 'Starter' },
  { id: 'rec2', name: 'Kimchi Pancake', price: '70.00 AED', category: 'Pancake' },
  { id: 'rec3', name: 'Bulgogi Beef Burger', price: '78.00 AED', category: 'Main Dish' },
];

const Cart = () => {
  const { items, updateQuantity, removeFromCart, cartCount, addToCart } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(' AED', ''));
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Your <span className="text-gradient">Cart</span>
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="glass-strong p-12 rounded-2xl shadow-3d max-w-md mx-auto">
                <ShoppingBag className="h-24 w-24 text-muted-foreground/30 mx-auto mb-6" />
                <h2 className="text-2xl font-display font-bold mb-3">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Looks like you haven't added any items yet
                </p>
                <Link to="/orders">
                  <Button className="gradient-primary text-primary-foreground">
                    Order Some Now
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="glass-strong p-6 rounded-xl shadow-3d">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <p className="text-lg font-bold text-primary">{item.price}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        
                        <div className="flex items-center gap-2 glass rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-bold">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="glass-strong p-6 rounded-xl shadow-3d sticky top-32">
                  <h3 className="text-xl font-display font-bold mb-4">Order Summary</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Items ({cartCount})</span>
                      <span className="font-semibold">{total.toFixed(2)} AED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-primary">{total.toFixed(2)} AED</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full gradient-primary text-primary-foreground" size="lg">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Recommendations */}
          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold mb-8">
              You Might <span className="text-gradient">Like This</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedItems.map((item) => (
                <div
                  key={item.id}
                  className="glass p-6 rounded-xl shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => addToCart({ 
                    id: item.id, 
                    name: item.name, 
                    price: item.price, 
                    category: item.category,
                    description: 'Delicious recommended item'
                  })}
                >
                  <div className="h-40 bg-gradient-primary rounded-lg mb-4" />
                  <h3 className="text-lg font-display font-bold mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{item.price}</span>
                    <Button size="sm" className="gradient-primary text-primary-foreground">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;