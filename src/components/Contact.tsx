import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["N 200, Mudiali Rd, Hanuman Mandir Basti", "Garden Reach, Kolkata, West Bengal 700024"],
      subtext: "Located in Rupsa Apartment"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["074392 17459"],
      link: "tel:+917439217459"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Open Daily till 10:00 PM", "Delivery available till 9:30 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-terracotta font-medium text-sm uppercase tracking-wider mb-4">
            Visit Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            We'd Love to See You
          </h2>
          <p className="text-muted-foreground text-lg">
            Drop by for a cup of chai or order from the comfort of your home
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-terracotta/10 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-terracotta transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">
                        {info.link ? (
                          <a href={info.link} className="hover:text-terracotta transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                    {info.subtext && (
                      <p className="text-sm text-terracotta mt-1">{info.subtext}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://maps.google.com/?q=Cafe+Loombini+Garden+Reach+Kolkata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="default" size="lg" className="w-full">
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </a>
              <a href="tel:+917439217459" className="flex-1">
                <Button variant="outline" size="lg" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call to Order
                </Button>
              </a>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-2xl overflow-hidden shadow-elevated border border-border h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8366669463377!2d88.31!3d22.5383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGarden%20Reach%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Loombini Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
