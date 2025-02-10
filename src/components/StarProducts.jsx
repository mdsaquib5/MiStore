import React from "react";

const StarProducts = ({ starPro }) => {
  return (
    <div className="container">
      <div className="starProducts">
        <div className="row g-0">
          <div className="col-lg-6">
            <div>
              <a href={starPro[0].url}>
                <img
                  src={starPro[0].image}
                  alt=""
                  className="img-fluid w-100"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-0">
              <div className="col-lg-6">
                <div>
                  <a href={starPro[1].url}>
                    <img
                      src={starPro[1].image}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <a href={starPro[2].url}>
                    <img
                      src={starPro[2].image}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <div>
                  <a href={starPro[3].url}>
                    <img
                      src={starPro[3].image}
                      alt=""
                      className="img-fluid w-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarProducts;