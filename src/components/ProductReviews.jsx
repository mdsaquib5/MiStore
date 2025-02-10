import React from "react";
import ReviewCard from "./ReviewCard";

const ProductReviews = ({ productReview }) => {
  return (
    <div className="container">
      <div className="row">
        {productReview.map((item, index) => (
          <ReviewCard
            key={item.image}
            index={index}
            img={item.image}
            title={item.name}
            model={item.review}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;