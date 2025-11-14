import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import bestseller1 from '@/assets/bestseller-1.jpg';
import bestseller2 from '@/assets/bestseller-2.jpg';
import bestseller3 from '@/assets/bestseller-3.jpg';

const branches = [
  {
    name: 'Ontario Tower',
    address: 'Ghost Kitchen, Ontario Tower, Business Bay - Dubai',
    phone: '+971 508145019',
    email: 'axisensoindubai@gmail.com',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=57F4%2BP7H+al+faris+mall+Al+Quoz+Al+Quoz+1+Dubai',
  },
  {
    name: 'Coming Soon',
    address: 'Coming Soon',
    phone: '+971 508145019',
    email: 'axisensoindubai@gmail.com',
    mapUrl: '',
  },
];

const menuImages = [
  { name: 'Mushroom Udon with Yuzu Citrus', image: bestseller1 },
  { name: 'Premium Dashimaki omelette', image: bestseller2 },
  { name: 'Karaage Japanese Fried chiken', image: bestseller3 },
];

export const BranchesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Our <span className="text-gradient">Branches</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Visit us at any of our premium locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="glass-strong p-8 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-display font-bold mb-6 text-primary">
                {branch.name}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{branch.address}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href={`tel:${branch.phone}`} className="text-sm hover:text-primary transition-colors">
                    {branch.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${branch.email}`} className="text-sm hover:text-primary transition-colors">
                    {branch.email}
                  </a>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full mt-6 gradient-primary text-primary-foreground">
                    Get Directions
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-strong">
                  <DialogHeader>
                    <DialogTitle>Choose Map Service</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full" variant="outline">
                        Open in Google Maps
                      </Button>
                    </a>
                    <a
                      href={`https://maps.apple.com/?q=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full" variant="outline">
                        Open in Apple Maps
                      </Button>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        {/* Menu Images */}
        <div className="mt-16">
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Our <span className="text-gradient">Menu</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuImages.map((item, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl overflow-hidden shadow-3d hover:shadow-elevated transition-all duration-300 hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-display font-bold text-center">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};