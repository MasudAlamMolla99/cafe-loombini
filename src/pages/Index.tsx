import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Cafe Loombini | Best Café in Garden Reach, Kolkata</title>
        <meta
          name="description"
          content="Cafe Loombini - Your cozy café in Garden Reach, Kolkata. Enjoy artisan coffee, delicious snacks, and warm ambiance. 4.3★ rated. Open till 10 PM. Call 074392 17459."
        />
        <meta name="keywords" content="Cafe Loombini, café Kolkata, Garden Reach café, coffee shop Kolkata, best café near me, restaurants Kolkata" />
        <meta property="og:title" content="Cafe Loombini | Best Café in Garden Reach, Kolkata" />
        <meta property="og:description" content="Your cozy corner in Garden Reach. Serving warmth in every cup. 4.3★ rated by 925+ customers." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://cafeloombini.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Cafe Loombini",
            "image": "",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "N 200, Mudiali Rd, Hanuman Mandir Basti",
              "addressLocality": "Garden Reach",
              "addressRegion": "Kolkata, West Bengal",
              "postalCode": "700024",
              "addressCountry": "IN"
            },
            "telephone": "+917439217459",
            "priceRange": "₹200-400",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.3",
              "reviewCount": "925"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "closes": "22:00"
            },
            "servesCuisine": ["Indian", "Café", "Fast Food"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
