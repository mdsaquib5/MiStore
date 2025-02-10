import React from "react";

const ReviewCard = ({ img, title, model, price, index }) => {
  return (
    <div className="col-lg-6">
      <div className="ProductReviewCard">
        <img src={img} alt={`${index} + product`} className="w-100" />
        <h5>{title}</h5>
        <div>
          <span>{model}</span>
          <b>{price}</b>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;