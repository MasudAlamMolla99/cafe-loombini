import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cafe Loombini interior with warm ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/50 to-espresso/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Star className="w-4 h-4 text-terracotta fill-terracotta" />
            <span className="text-cream text-sm font-medium">4.3 Rating • 925 Reviews</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cafe Loombini
          </h1>

          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Your cozy corner in Garden Reach, Kolkata. Serving warmth in every cup since day one.
          </p>

          {/* Location & Hours */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-cream/80">
              <MapPin className="w-4 h-4 text-terracotta" />
              <span className="text-sm">Garden Reach, Kolkata</span>
            </div>
            <div className="flex items-center gap-2 text-cream/80">
              <Clock className="w-4 h-4 text-terracotta" />
              <span className="text-sm">Open till 10:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-cream/80">
              <span className="text-sm font-medium">₹200–400 per person</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="accent" size="lg" className="group">
              Reserve a Table
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="hero-outline" size="lg">
              Order Online
            </Button>
            <a href="tel:+917439217459">
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
