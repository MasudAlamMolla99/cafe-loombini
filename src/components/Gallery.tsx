import heroImage from "@/assets/hero-cafe.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import coffeeArt from "@/assets/coffee-art.jpg";
import snacks from "@/assets/snacks.jpg";
import desserts from "@/assets/desserts.jpg";
import foodSpread from "@/assets/food-spread.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Cafe Loombini main dining area", span: "col-span-2 row-span-2" },
    { src: coffeeArt, alt: "Artisan coffee with latte art", span: "col-span-1 row-span-1" },
    { src: snacks, alt: "Delicious Indian snacks platter", span: "col-span-1 row-span-1" },
    { src: cafeInterior, alt: "Cozy seating corner", span: "col-span-1 row-span-2" },
    { src: foodSpread, alt: "Our signature food spread", span: "col-span-1 row-span-1" },
    { src: desserts, alt: "Assorted desserts display", span: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-terracotta font-medium text-sm uppercase tracking-wider mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Peek Inside Our World
          </h2>
          <p className="text-muted-foreground text-lg">
            From our warm interiors to mouthwatering dishes, every corner has a story
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 3 ? "md:row-span-2" : ""}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-300 flex items-end p-4 md:p-6">
                <p className="text-cream text-sm md:text-base font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
