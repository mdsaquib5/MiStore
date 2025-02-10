import React from "react";
import OfferComp from "./OfferComp";

const Offers = ({ offerCard }) => {
  return (
    <div className="offerSection">
      {offerCard.map((item, index) => (
        <OfferComp
          key={item.image}
          index={index}
          src={item.image}
          link={item.url}
        />
      ))}
    </div>
  );
};

export default Offers;