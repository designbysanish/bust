import { useState } from 'react';
import { Clock, ChefHat, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const upcoming = [
  {
    icon: ChefHat,
    title: 'New Chef Collaboration',
    description: 'Michelin-starred chef joining for exclusive tasting menu',
    date: 'Coming Soon',
  },
  {
    icon: Wine,
    title: 'Wine Pairing Experience',
    description: 'Curated selection from renowned vineyards worldwide',
    date: 'Coming Soon',
  },
];

export const ComingSoonSection = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "We'll notify you when new experiences are available.",
    });
    setEmail('');
    setOpen(false);
  };

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-primary animate-glow" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Coming <span className="text-gradient">Soon</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Exciting new experiences on the horizon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcoming.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-strong p-8 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <span className="text-sm text-primary font-semibold">{item.date}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                Notify Me
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-strong">
              <DialogHeader>
                <DialogTitle>Get Notified</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="notify-email">Email Address</Label>
                  <Input
                    id="notify-email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="glass mt-2"
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-primary-foreground">
                  Subscribe
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};