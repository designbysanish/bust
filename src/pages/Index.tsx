import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { ConceptSection } from '@/components/ConceptSection';
import { BestSellingSection } from '@/components/BestSellingSection';
import { SignatureTouchSection } from '@/components/SignatureTouchSection';
import { ComingSoonSection } from '@/components/ComingSoonSection';
import { BranchesSection } from '@/components/BranchesSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <ConceptSection />
      <BestSellingSection />
      <SignatureTouchSection />
      <ComingSoonSection />
      <BranchesSection />
      <Footer />
    </div>
  );
};

export default Index;
