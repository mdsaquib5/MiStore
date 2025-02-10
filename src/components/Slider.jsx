import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item, index) => (
        <Carousel.Item key={index} keyboard={true}>
          <img
            src={item}
            className="d-block w-100"
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;