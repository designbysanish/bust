import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface SampleMenusDialogProps {
  children: React.ReactNode;
}

export const SampleMenusDialog = ({ children }: SampleMenusDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-strong">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-center mb-2">
            Sample <span className="text-gradient">Menus</span>
          </DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="corporate" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
            <TabsTrigger value="wedding">Wedding</TabsTrigger>
            <TabsTrigger value="private">Private Party</TabsTrigger>
          </TabsList>

          <TabsContent value="corporate" className="mt-6 space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary">Executive Lunch Menu</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Appetizers</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Artisan Bread Selection with Herb Butter</li>
                    <li>• Caesar Salad with Parmesan Crisps</li>
                    <li>• Tomato Bruschetta</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Main Course (Choice of)</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Grilled Salmon with Lemon Butter</li>
                    <li>• Pan-Seared Chicken with Mushroom Sauce</li>
                    <li>• Vegetarian Risotto with Seasonal Vegetables</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Dessert</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Tiramisu or Chocolate Mousse</li>
                    <li>• Coffee & Tea Selection</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-primary font-semibold">Starting from AED 150 per person</p>
            </div>
          </TabsContent>

          <TabsContent value="wedding" className="mt-6 space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary">Coming Soon</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Coming Soon</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Coming Soon</li>
                    <li>• Coming Soon</li>
                    <li>• Coming Soon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Coming Soon</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Coming Soon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Coming Soon</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Coming Soon</li>
                    <li>• Coming Soon</li>
                    <li>• Coming Soon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Coming Soon</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Coming Soon</li>
                    <li>• Coming Soon</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-primary font-semibold">Coming Soon</p>
            </div>
          </TabsContent>

          <TabsContent value="private" className="mt-6 space-y-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary">Celebration Menu</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Starters</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Caprese Skewers</li>
                    <li>• Shrimp Cocktail</li>
                    <li>• Spinach & Artichoke Dip</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Buffet Stations</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Carving Station: Prime Rib & Honey Ham</li>
                    <li>• Pasta Bar with Multiple Sauces</li>
                    <li>• Salad Bar with Fresh Ingredients</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Sides</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Garlic Mashed Potatoes</li>
                    <li>• Seasonal Vegetables</li>
                    <li>• Fresh Dinner Rolls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Dessert</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Assorted Mini Pastries</li>
                    <li>• Fresh Fruit Display</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-primary font-semibold">Starting from $65 per person</p>
            </div>
          </TabsContent>
        </Tabs>

        <p className="text-center text-sm text-muted-foreground mt-6">
          All menus can be customized to accommodate dietary restrictions and preferences
        </p>
      </DialogContent>
    </Dialog>
  );
};