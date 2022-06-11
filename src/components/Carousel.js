import React, { useEffect, useState } from "react";
import Title from "./Title";
import SubTitle from "./SubTitle";

const Carousel = ({ slide, infinite }) => {
  const [carouselData, setCarouselData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:3600/api/carousel/${slide}`
    ).then((data) => data.json());
    setCarouselData(response);
    setIsLoading(false);
  }
  useEffect(() => {
    if (infinite) {
      fetchData();
    }
  }, [slide, infinite]);

  return (
    <div className={"slides active"}>
      {carouselData && (
        <img
          className="slide-image"
          src={carouselData.image}
          alt={carouselData.image}
        />
      )}

      <Title title={carouselData.title} />
      <SubTitle title={carouselData.subTitle} />
      {isLoading && <h3>Loading...</h3>}
    </div>
  );
};
export default Carousel;
