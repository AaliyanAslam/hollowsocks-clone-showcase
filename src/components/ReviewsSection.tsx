const ReviewsSection = () => {
  const reviews = [
    {
      name: "Mikol M.",
      text: "I was reluctant to believe that my feet would be comfortable in all temperatures during these days of 50 degree temperature changes. Much to my Suprise my feet were comfortable all day. I am looking forward to these socks on my next fishing trip in Alaska where we could have three seasons in one day.",
      verified: true
    },
    {
      name: "Randy T.",
      text: "I work outdoors on my feet so I need a GREAT work sock! Love these!! Thanks for a great product.",
      verified: true
    },
    {
      name: "Harry W.",
      text: "I had to think about spending that much on socks but I'm glad I did. These are the best socks that i have ever had. They fit , don't fall down, and you can wear them all day and the feel the same at 6am and 10 pm. I have already ordered more….",
      verified: true
    },
    {
      name: "Mark B.",
      text: "After years of struggling with sweaty, blistered feet through countless sock types, these game-changing alpaca socks finally work.",
      verified: true
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hollow-dark">
            OVER 1,000,000+ PAIRS SOLD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
              <h6 className="font-bold text-sm mb-1 text-hollow-dark">
                {review.name}
              </h6>
              {review.verified && (
                <span className="text-xs text-hollow-green font-semibold mb-3 block">
                  VERIFIED BUYER
                </span>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-hollow-dark text-hollow-light px-8 py-3 rounded-md font-semibold hover:bg-hollow-dark/90 transition-colors">
            SHOP BEST SELLERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;