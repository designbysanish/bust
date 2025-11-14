import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { RequestQuoteDialog } from '@/components/RequestQuoteDialog';
import { SampleMenusDialog } from '@/components/SampleMenusDialog';
import { LunchBoxSubscription } from '@/components/LunchBoxSubscription';
import { Users, Calendar, Award, HeartHandshake } from 'lucide-react';

const Catering = () => {
  const services = [
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Impress clients and colleagues with exceptional cuisine',
      features: ['Custom menus', 'Professional service', 'Full setup'],
    },
    {
      icon: HeartHandshake,
      title: 'Weddings',
      description: 'Coming Soon',
      features: ['Coming Soon'],
    },
    {
      icon: Calendar,
      title: 'Private Parties',
      description: 'Celebrate in style with our exclusive catering services',
      features: ['Flexible options', 'Premium ingredients', 'Expert staff'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              Catering <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elevate your events with our premium catering services
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass-strong p-8 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="glass p-12 rounded-2xl shadow-3d mb-16">
            <div className="flex items-center justify-center mb-8">
              <Award className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              Why Choose Our Catering?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">10+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Decades of expertise in fine dining and event catering
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">Custom Menus</h3>
                <p className="text-muted-foreground">
                  Tailored to your preferences and dietary requirements
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest ingredients and preparation methods
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2 text-primary">Full Service</h3>
                <p className="text-muted-foreground">
                  From planning to cleanup, we handle everything
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center glass-strong p-12 rounded-2xl shadow-3d">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Plan Your Event?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our catering team to discuss your requirements and receive a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RequestQuoteDialog>
                <Button size="lg" className="gradient-primary text-primary-foreground">
                  Request Quote
                </Button>
              </RequestQuoteDialog>
              <SampleMenusDialog>
                <Button size="lg" variant="outline">
                  View Sample Menus
                </Button>
              </SampleMenusDialog>
            </div>
          </div>
        </div>

        {/* Lunch Box Subscription */}
        <LunchBoxSubscription />
      </main>

      <Footer />
    </div>
  );
};

export default Catering;