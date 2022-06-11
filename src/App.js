import React, { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Arrows from "./components/Arrows";
import "./components/slider.css";

function App() {
  const [slide, setSlide] = useState(1);
  const [infinite, setInfinite] = useState(true);

  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
      setInfinite(true);
    } else {
      setInfinite(false);
    }
  };

  const nextSlide = () => {
    if (slide !== 10) {
      setSlide(slide + 1);
      setInfinite(true);
    } else {
      setInfinite(false);
    }
  };

  return (
    <div className="slider-container">
      <Carousel slide={slide} infinite={infinite} />
      <Arrows prevSlide={() => prevSlide()} nextSlide={() => nextSlide()} />
    </div>
  );
}

export default App;
