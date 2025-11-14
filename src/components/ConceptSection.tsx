import { Sparkles } from 'lucide-react';
import freshImage from '@/assets/concept-fresh.jpg';
import artisanImage from '@/assets/concept-artisan.jpg';
import innovativeImage from '@/assets/concept-innovative.jpg';

export const ConceptSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-primary animate-glow" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          Our <span className="text-gradient">Concept</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
          At AxisEnso, we celebrate the art of Japanese cuisine.
          Every dish is meticulously crafted, honoring traditional techniques while embracing subtle, modern innovation.
          From the delicate balance of flavors to the elegant presentation, each creation is designed to delight the spirit of Japan to every plate.
          Dining with us is a journey of taste, precision, and passion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="glass p-6 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-64">
              <img 
                src={freshImage} 
                alt="Fresh locally sourced ingredients" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary">Fresh</h3>
            <p className="text-muted-foreground">
              Locally sourced ingredients delivered daily for peak freshness
            </p>
          </div>
          <div className="glass p-6 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-64">
              <img 
                src={artisanImage} 
                alt="Artisan chef crafting food" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary">Artisan</h3>
            <p className="text-muted-foreground">
              Crafted by culinary masters with years of acclaimed expertise
            </p>
          </div>
          <div className="glass p-6 rounded-2xl shadow-3d hover:shadow-elevated transition-all duration-300 group">
            <div className="relative overflow-hidden rounded-xl mb-6 h-64">
              <img 
                src={innovativeImage} 
                alt="Innovative fusion cuisine" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3 text-primary">Innovative</h3>
            <p className="text-muted-foreground">
              Pushing culinary boundaries with creative flavor combinations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};