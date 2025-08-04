const ShopByActivitySection = () => {
  const activities = [
    {
      name: "EVERYDAY",
      image: "/placeholder.svg"
    },
    {
      name: "COMPRESSION", 
      image: "/placeholder.svg"
    },
    {
      name: "TRADES",
      image: "/placeholder.svg"
    },
    {
      name: "TRAIL",
      image: "/placeholder.svg"
    },
    {
      name: "RUNNING",
      image: "/placeholder.svg"
    },
    {
      name: "HUNTING", 
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-hollow-dark">
          SHOP BY ACTIVITY
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-muted">
                <img 
                  src={activity.image} 
                  alt={activity.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wide">
                  {activity.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByActivitySection;