import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Ananya Roy",
      rating: 5,
      text: "Absolutely love this place! The ambiance is so cozy and the cold coffee is the best I've had in Kolkata. Perfect for evening hangouts with friends.",
      date: "2 weeks ago"
    },
    {
      name: "Rahul Banerjee",
      rating: 5,
      text: "Great food at amazing prices. The chicken biryani is a must-try! Staff is friendly and the service is quick. My new favorite spot in Garden Reach.",
      date: "1 month ago"
    },
    {
      name: "Priya Sharma",
      rating: 4,
      text: "Lovely café with Instagram-worthy interiors. The momos and chai combo is perfect. Only wish they had more seating during peak hours.",
      date: "3 weeks ago"
    },
    {
      name: "Arjun Das",
      rating: 5,
      text: "Been coming here for months. Consistent quality, affordable prices, and the warmth of the staff makes it feel like home. Highly recommended!",
      date: "1 week ago"
    },
    {
      name: "Sneha Ghosh",
      rating: 4,
      text: "The desserts here are divine! Tried the chocolate brownie and it was heavenly. Great spot for a quick coffee break or a casual date.",
      date: "2 months ago"
    },
    {
      name: "Vikram Mukherjee",
      rating: 5,
      text: "Finally a good café in our area! The delivery is also very punctual. Their masala chai reminds me of home. Keep up the good work!",
      date: "5 days ago"
    }
  ];

  const stats = [
    { value: "4.3", label: "Average Rating" },
    { value: "925+", label: "Total Reviews" },
    { value: "92%", label: "Recommend Us" },
  ];

  return (
    <section id="reviews" className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-terracotta font-medium text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real reviews from real customers who made Cafe Loombini their favorite spot
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 bg-card rounded-xl border border-border">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:shadow-soft transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-terracotta/20 mb-4 group-hover:text-terracotta/40 transition-colors" />
              
              {/* Review Text */}
              <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "text-terracotta fill-terracotta"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              
              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="font-semibold text-primary">
                      {review.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
