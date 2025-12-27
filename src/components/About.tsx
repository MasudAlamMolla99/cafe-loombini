import { Coffee, Heart, Users, Sparkles } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const About = () => {
  const features = [
    {
      icon: Coffee,
      title: "Artisan Brews",
      description: "Freshly brewed coffee made with love and the finest beans"
    },
    {
      icon: Heart,
      title: "Cozy Ambiance",
      description: "A warm, inviting space perfect for conversations and relaxation"
    },
    {
      icon: Users,
      title: "Community Favorite",
      description: "Loved by 925+ customers with a stellar 4.3-star rating"
    },
    {
      icon: Sparkles,
      title: "Affordable Luxury",
      description: "Premium café experience at just ₹200–400 per person"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={cafeInterior}
                alt="Cozy interior of Cafe Loombini"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card p-4 md:p-6 rounded-xl shadow-elevated border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-terracotta" />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">925+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-terracotta font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Every Cup Tells a Story
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Nestled in the heart of Garden Reach, Kolkata, Cafe Loombini is more than just a café – it's a sanctuary for coffee lovers and food enthusiasts. Located in Rupsa Apartment on Mudiali Road, we've become the go-to spot for locals seeking quality brews, delicious snacks, and a warm atmosphere.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're catching up with friends, working on your laptop, or simply enjoying a quiet moment with your favorite beverage, our cozy space welcomes you with open arms.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-terracotta/10 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-terracotta transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
