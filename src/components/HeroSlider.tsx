import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: 'Discover Culinary Excellence',
    subtitle: 'Artfully Crafted Dishes',
    cta: 'Download Our Menu',
    ctaIcon: Download,
    ctaLink: '/menu.pdf',
  },
  {
    image: hero2,
    title: 'Order Your Favorites',
    subtitle: 'Fresh Ingredients, Bold Flavors',
    cta: 'Order Now',
    ctaIcon: ShoppingBag,
    ctaLink: '/orders',
  },
  {
    image: hero3,
    title: 'Indulge Your Senses',
    subtitle: 'Unforgettable Dining Experience',
    cta: 'View Our Specials',
    ctaIcon: ShoppingBag,
    ctaLink: '/orders',
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.ctaIcon;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 gradient-hero" />
            </div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 text-center">
                <h2
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 animate-fade-up"
                  style={{ animationDelay: '0.2s', opacity: 0 }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-8 animate-fade-up"
                  style={{ animationDelay: '0.4s', opacity: 0 }}
                >
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="gradient-primary text-primary-foreground hover:shadow-elevated transition-all duration-300 text-lg px-8 py-6 animate-fade-up"
                  style={{ animationDelay: '0.6s', opacity: 0 }}
                  asChild
                >
                  <a href={slide.ctaLink}>
                    <Icon className="mr-2 h-5 w-5" />
                    {slide.cta}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 glass-strong hover:bg-primary/20 h-12 w-12 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 glass-strong hover:bg-primary/20 h-12 w-12 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 bg-primary'
                : 'w-3 bg-foreground/40 hover:bg-foreground/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
