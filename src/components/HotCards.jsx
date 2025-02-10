import React from "react";

const HotCards = ({ name, price, img, index }) => {
  return (
    <div className="col-lg-4 HotItemCard">
      <img src={img} alt={`${index} product`} className="w-100 img-fluid" />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  );
};

export default HotCards;