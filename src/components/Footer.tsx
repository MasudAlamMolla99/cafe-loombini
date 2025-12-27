import { Coffee, Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-espresso text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <span className="text-espresso font-display text-lg font-bold">CL</span>
              </div>
              <span className="font-display text-2xl font-semibold">Cafe Loombini</span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Your cozy corner in Garden Reach, Kolkata. Serving warmth in every cup since day one.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-terracotta flex-shrink-0" />
                <span className="text-cream/70 text-sm">
                  N 200, Mudiali Rd, Garden Reach, Kolkata - 700024
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-terracotta flex-shrink-0" />
                <a href="tel:+917439217459" className="text-cream/70 text-sm hover:text-cream">
                  074392 17459
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-terracotta flex-shrink-0" />
                <span className="text-cream/70 text-sm">Open till 10:00 PM daily</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Visit Us Today</h3>
            <div className="bg-cream/10 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Coffee className="w-6 h-6 text-terracotta" />
                <span className="font-medium">Now Open</span>
              </div>
              <p className="text-sm text-cream/70 mb-1">Daily: Morning to 10:00 PM</p>
              <p className="text-sm text-cream/70">Delivery: Till 9:30 PM</p>
            </div>
            <div className="mt-4 p-4 border border-cream/20 rounded-xl">
              <p className="text-sm text-cream/80 font-medium mb-1">Price Range</p>
              <p className="text-lg font-display font-bold text-terracotta">₹200 – ₹400</p>
              <p className="text-xs text-cream/60">per person</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Cafe Loombini. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm">
              Made with ❤️ in Kolkata
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
