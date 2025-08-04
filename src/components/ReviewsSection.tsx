const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "These socks are incredible! I work in construction and my feet stay completely dry and comfortable all day, even in 100+ degree weather.",
      verified: true
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Best socks I've ever owned. The alpaca fiber really makes a difference. No more sweaty feet during my hiking trips!",
      verified: true
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "I bought these for my husband who works outdoors. He says they're life-changing. Already ordered 3 more pairs!",
      verified: true
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hollow-dark">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl">★</span>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">4.9/5 from 10,000+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                {review.verified && (
                  <span className="text-xs bg-hollow-green text-hollow-light px-2 py-1 rounded-full">
                    Verified Purchase
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                "{review.text}"
              </p>
              <p className="font-semibold text-sm text-hollow-dark">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;