import { useState } from "react";
import { Coffee, Utensils, Cake, Soup } from "lucide-react";
import coffeeArt from "@/assets/coffee-art.jpg";
import snacks from "@/assets/snacks.jpg";
import desserts from "@/assets/desserts.jpg";
import foodSpread from "@/assets/food-spread.jpg";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("beverages");

  const categories = [
    { id: "beverages", name: "Beverages", icon: Coffee },
    { id: "snacks", name: "Snacks", icon: Utensils },
    { id: "meals", name: "Meals", icon: Soup },
    { id: "desserts", name: "Desserts", icon: Cake },
  ];

  const menuItems: Record<string, Array<{ name: string; description: string; price: string; popular?: boolean }>> = {
    beverages: [
      { name: "Masala Chai", description: "Traditional spiced tea with aromatic herbs", price: "₹40", popular: true },
      { name: "Cold Coffee", description: "Chilled coffee with ice cream and chocolate", price: "₹90", popular: true },
      { name: "Cappuccino", description: "Rich espresso with steamed milk foam", price: "₹120" },
      { name: "Lemon Iced Tea", description: "Refreshing tea with fresh lemon zest", price: "₹60" },
      { name: "Hot Chocolate", description: "Creamy Belgian chocolate drink", price: "₹100" },
      { name: "Fresh Lime Soda", description: "Sparkling lime with mint leaves", price: "₹50" },
    ],
    snacks: [
      { name: "Veg Momos", description: "Steamed dumplings with spicy chutney", price: "₹80", popular: true },
      { name: "French Fries", description: "Crispy golden fries with seasoning", price: "₹70" },
      { name: "Paneer Pakora", description: "Crispy fried cottage cheese fritters", price: "₹100" },
      { name: "Spring Rolls", description: "Crunchy rolls with veggie filling", price: "₹90", popular: true },
      { name: "Cheese Corn Balls", description: "Cheesy corn fritters, deep fried", price: "₹110" },
      { name: "Aloo Tikki", description: "Spiced potato patties with chutneys", price: "₹60" },
    ],
    meals: [
      { name: "Veg Fried Rice", description: "Wok-tossed rice with fresh vegetables", price: "₹140", popular: true },
      { name: "Chicken Biryani", description: "Aromatic rice with tender chicken", price: "₹200" },
      { name: "Paneer Butter Masala", description: "Creamy tomato curry with naan", price: "₹180" },
      { name: "Hakka Noodles", description: "Indo-Chinese style stir-fried noodles", price: "₹130" },
      { name: "Egg Roll", description: "Flaky paratha with egg and veggies", price: "₹80", popular: true },
      { name: "Chicken Manchurian", description: "Indo-Chinese chicken in tangy sauce", price: "₹170" },
    ],
    desserts: [
      { name: "Chocolate Brownie", description: "Warm fudgy brownie with ice cream", price: "₹120", popular: true },
      { name: "Gulab Jamun", description: "Soft milk dumplings in sugar syrup", price: "₹60" },
      { name: "Ice Cream Sundae", description: "Three scoops with toppings", price: "₹100" },
      { name: "Rasgulla", description: "Spongy cottage cheese balls", price: "₹50" },
      { name: "Chocolate Pastry", description: "Layered chocolate cake slice", price: "₹80", popular: true },
      { name: "Fruit Custard", description: "Creamy custard with seasonal fruits", price: "₹70" },
    ],
  };

  const categoryImages: Record<string, string> = {
    beverages: coffeeArt,
    snacks: snacks,
    meals: foodSpread,
    desserts: desserts,
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-terracotta font-medium text-sm uppercase tracking-wider mb-4">
            Our Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crafted with Love
          </h2>
          <p className="text-muted-foreground text-lg">
            From aromatic chai to indulgent desserts, discover flavors that warm your soul
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated lg:sticky lg:top-32">
            <img
              src={categoryImages[activeCategory]}
              alt={`${activeCategory} at Cafe Loombini`}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-cream font-display text-2xl font-semibold capitalize">
                {activeCategory}
              </p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="bg-card p-5 rounded-xl border border-border hover:shadow-soft transition-all duration-300 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="px-2 py-0.5 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="text-lg font-display font-bold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Delivery Note */}
            <div className="bg-secondary/50 p-4 rounded-xl text-center mt-6">
              <p className="text-sm text-muted-foreground">
                🛵 <span className="font-medium">Delivery available till 9:30 PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
