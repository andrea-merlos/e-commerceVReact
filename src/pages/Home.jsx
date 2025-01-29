import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import CSSSlider from "../components/CSSSlider";
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ data }) => {
  return (
    <div>
      <Hero />
      <div className="slider-promo-container">
        <CSSSlider products={data} />
        <div className="promo-text-box">
          <h2>Get Your Gifts For Valentine's Day</h2>
          <p>Order by 02/09 for delivery before 02/14!</p>
          <Link to="/products" className="promo-link">
            Shop Now
          </Link>
        </div>
      </div>
      <FeaturedProducts />
      <div className="video-text-container">
        <div className="text-wrapper">
          <h2>Power Pumps</h2>
          <p>
            STYLE Instantly identifiable for their inimitable beauty and
            uncompromising quality, discover andrea's most iconic shoe styles
          </p>
        </div>
        <div className="video-wrapper">
          <video controls autoplay muted loop>
            <source src="/images/VIDEO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};
export default Home;
