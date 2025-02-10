import "./App.css";
import { myData } from "./data/data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import AccessoriesMenu from "./components/AccessoriesMenu";
import AccessoriesItems from "./components/AccessoriesItems";
import ProductReviews from "./components/ProductReviews";
import VideoCards from "./components/VideoCards";
import PressSlider from "./components/PressSlider";
import Footer from "./components/Footer";

function Home() {
  return (
    <body>
      <BrowserRouter>
        {/* Topbar section */}
        <PreNavbar />

        {/* Navabar section */}
        <Navbar />

        {/* hero slider */}
        <Slider start={myData.banner.start} />

        {/* Offer section */}
        <Offers offerCard={myData.offer} />

        {/* Heading Component */}
        <Heading headingText="STAR PRODUCTS" />

        {/* Star Products section */}
        <StarProducts starPro={myData.starProduct} />

        {/* Heading Component */}
        <Heading headingText="HOT ACCESORIES" />

        {/* Hot Accessories section */}
        <AccessoriesMenu />

        {/* Hot Accessories product items */}
        <Routes>
          <Route
            path="/music"
            element={
              <AccessoriesItems
                music={myData.hotAccessories.music}
                musiCover={myData.hotAccessoriesCover.music}
              />
            }
          ></Route>

          <Route
            path="/smartDevice"
            element={
              <AccessoriesItems
                smartDevice={myData.hotAccessories.smartDevice}
                smartDeviceCover={myData.hotAccessoriesCover.smartDevice}
              />
            }
          ></Route>

          <Route
            path="/home"
            element={
              <AccessoriesItems
                home={myData.hotAccessories.home}
                homeCover={myData.hotAccessoriesCover.home}
              />
            }
          ></Route>

          <Route
            path="/lifeStyle"
            element={
              <AccessoriesItems
                lifeStyle={myData.hotAccessories.lifeStyle}
                lifeStyleCover={myData.hotAccessoriesCover.lifeStyle}
              />
            }
          ></Route>

          <Route
            path="/mobileAccessories"
            element={
              <AccessoriesItems
                mobileAccessories={myData.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  myData.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          ></Route>
        </Routes>

        {/* Product Review secion */}
        <Heading headingText="PRODUCT REVIEWS" />
        <ProductReviews productReview={myData.productReviews} />

        {/* Videos Section */}
        <Heading headingText="VIDEOS" />
        <VideoCards videosCard={myData.videos} />

        {/* Press section */}
        <Heading headingText="IN THE PRESS" />
        <PressSlider banner={myData.banner} />

        {/* Footer section */}

        <Footer footer={myData.footer} />
      </BrowserRouter>
    </body>
  );
}

export default Home;