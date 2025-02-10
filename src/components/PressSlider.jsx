import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PressSlider = ({ banner }) => {
  return (
    <>
      <div className="pressSlider">
        <Carousel>
          {banner.end.map((item, index) => (
            <Carousel.Item
              key={index}
              id="banner"
              interval={1000}
              keyboard={true}
            >
              <img
                src={item.image}
                className="d-block w-100"
                id="bannerImage"
                alt={`Slide ${index} banner`}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default PressSlider;