import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import ownerPortrait from '@/assets/owner-portrait.jpg';
import chefkenn from '@/assets/chefkenn.jpg';
import { Award, Heart, Target, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Every dish is crafted with love and dedication to culinary excellence',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on ingredients or preparation standards',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local farmers and suppliers while serving our guests',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly evolving our menu with creative flavor combinations',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the story behind AxisEnso
            </p>
          </div>

          {/* Story */}
          <div className="glass-strong p-12 rounded-2xl shadow-3d mb-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Story</h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ensō — The Circle of Emptiness and Infinity 
                Ensō is a sacred Zen symbol, drawn in a single, unbroken stroke.
                It embodies enlightenment, unity, and the beauty of imperfection.
              </p>
              <p>
                When the brush moves, the mind becomes still
                and the circle reveals the artist’s true self. There is no right or wrong Ensō.
                Each line reflects the heart of the moment pure, unfiltered, alive.
              </p>
              <p>
                Our logo features an open Ensō—a circle drawn with a single brushstroke, intentionally left incomplete.

                In Zen philosophy, the open circle symbolizes freedom, growth, and infinite connection.
                It reminds us that perfection is not about being complete,
                but about embracing each moment as it is ever-changing, ever-evolving.

                The small opening in the circle represents the space where the self and the world breathe together
                where possibilities flow in, and creation continues.

                Our Ensō is open,
                because we believe that beauty lives within imperfection,
                and that life itself is a circle that never truly closes.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="glass p-8 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-strong mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Founder */}
          <div className="glass-strong p-12 rounded-2xl shadow-3d mb-16">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Meet Our Founder</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
              <div className="w-64 md:w-64 h-[88vh] md:h-auto flex-shrink-0">
                <img
                  src={ownerPortrait}
                  alt="Restaurant Owner"
                  className="w-full h-full object-contain rounded-2xl shadow-3d"
                />
              </div>
              <div className="flex-1 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-display font-bold">Chef Takumi Yamamoto</h3>
                <p className="text-primary font-semibold">Founder & Head Chef</p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 10 years of culinary experience, Chef Takumi has trained under Michelin-starred 
                  chefs across Europe and Asia. His passion for Japanese cuisine and innovative fusion techniques 
                  led him to create AxisEnso, where traditional flavors meet contemporary dining.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="glass-strong p-12 rounded-2xl shadow-3d">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">Our Team</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Led by award-winning chefs and hospitality professionals dedicated to excellence
            </p>
            <div className="grid grid-cols-1 md:grid-cols-0 gap-8">
              {[
                { name: 'Chef Kenn', role: 'Executive Chef', years: '5+ years of experience in Japanese Restaurant', image: chefkenn },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center glass-strong shadow-3d">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.years}</p>
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

export default About;
