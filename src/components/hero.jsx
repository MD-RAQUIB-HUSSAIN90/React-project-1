const HeroSection = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. 
          YOUR FEET DESERVE THE BEST AND WE'RE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button className="btn">Shope Now</button>
          <button className="second-btn btn">Categary</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart"  className="btn" />
            <img src="/images/amazon.png" alt="amazon"   className="btn"/>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
