import { Flame, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'The Art of Japanese Cuisine',
    description: 'Enjoy the immersive experience of our chefs bringing each dish to life',
  },
  {
    icon: Award,
    title: 'Excellence in Service',
    description: 'Where every detail of hospitality and cuisine is crafted to perfection',
  },
  {
    icon: Users,
    title: 'Reserve Your Experience',
    description: 'Arrange your meal in advance for a seamless, personalized experience',
  },
];

export const SignatureTouchSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Our Signature <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            What makes us truly exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-strong mb-6 group-hover:shadow-elevated transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
