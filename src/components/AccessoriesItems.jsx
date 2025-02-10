import React from "react";
import HotCards from "./HotCards";

const AccessoriesItems = ({
  music,
  musiCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div>
            <img
              src={
                musiCover ||
                smartDeviceCover ||
                homeCover ||
                lifeStyleCover ||
                mobileAccessoriesCover
              }
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {music &&
              music.map((item, index) => (
                <HotCards
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  img={item.image}
                  index={index}
                />
              ))}

            {smartDevice &&
              smartDevice.map((item, index) => (
                <HotCards
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  img={item.image}
                  index={index}
                />
              ))}

            {home &&
              home.map((item, index) => (
                <HotCards
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  img={item.image}
                  index={index}
                />
              ))}

            {lifeStyle &&
              lifeStyle.map((item, index) => (
                <HotCards
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  img={item.image}
                  index={index}
                />
              ))}

            {mobileAccessories &&
              mobileAccessories.map((item, index) => (
                <HotCards
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  img={item.image}
                  index={index}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessoriesItems;