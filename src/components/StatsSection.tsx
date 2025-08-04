const StatsSection = () => {
  const stats = [
    {
      number: "10K+",
      label: "5-STAR REVIEWS"
    },
    {
      number: "1 Million+",
      label: "PAIRS SOLD"
    },
    {
      number: "99-Day",
      label: "MONEY BACK GUARANTEE"
    }
  ];

  return (
    <section className="bg-hollow-dark py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-hollow-light">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-medium tracking-wide opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;