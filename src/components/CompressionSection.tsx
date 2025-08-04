const CompressionSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Compression Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-hollow-dark">
              COMPRESSION
            </h2>
            <p className="text-muted-foreground mb-6">
              Give your feet the supportive circulation help they deserve with our new Alpaca Compression Socks. Now available in standard and wide calf.
            </p>
            <button className="bg-hollow-green text-hollow-light px-6 py-3 rounded-md font-semibold hover:bg-hollow-green/90 transition-colors">
              SHOP COMPRESSION SOCKS
            </button>
          </div>

          {/* Summer Bundle */}
          <div className="text-center">
            <div className="bg-hollow-green text-hollow-light px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              BUY 3 GET 3 FREE
            </div>
            <h3 className="text-xl font-bold mb-2 text-hollow-dark">SUMMER BUNDLE</h3>
            <p className="text-muted-foreground mb-4">3x CREW • 3x NO-SHOW</p>
            <button className="bg-hollow-dark text-hollow-light px-6 py-3 rounded-md font-semibold hover:bg-hollow-dark/90 transition-colors">
              SHOP NOW
            </button>
          </div>

          {/* Crew Bundle */}
          <div className="text-center">
            <div className="bg-hollow-green text-hollow-light px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              BUY 3 GET 3 FREE
            </div>
            <h3 className="text-xl font-bold mb-2 text-hollow-dark">CREW BUNDLE</h3>
            <p className="text-muted-foreground mb-4">BUY 3 PAIRS, GET 3 PAIRS FREE</p>
            <button className="bg-hollow-dark text-hollow-light px-6 py-3 rounded-md font-semibold hover:bg-hollow-dark/90 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompressionSection;