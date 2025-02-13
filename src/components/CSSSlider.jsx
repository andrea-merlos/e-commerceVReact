import React, { useState, useEffect } from "react";
import "./CSSSlider.css";

const CSSSlider = ({ products = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderProducts = products.slice(-4);

  useEffect(() => {
    //hook runs code after change
    const timer = setInterval(() => {
      //sets timer
      setCurrentSlide(
        (prevSlide) =>
          prevSlide === sliderProducts.length - 1 ? 0 : prevSlide + 1 //resets or incriments lide
      );
    }, 3000);

    return () => clearInterval(timer); // line returns a cleanup function when re-runs
  }, [sliderProducts.length]);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          // maps over array to create slide for each product
          {sliderProducts.map((product, index) => (
            <div key={`slide${index}`} className="slide">
              <img src={product.image_url} alt={product.title} />
              <div className="slide-content">
                <h3>{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* craetes section to create navigation dots  */}
        <div className="navigation">
          {sliderProducts.map((_, index) => (
            <button
              key={`dot${index}`}
              className={`nav-dot ${currentSlide === index ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CSSSlider;
