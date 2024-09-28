import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCaroselData";
import "react-alice-carousel/lib/alice-carousel.css";

const items = mainCarouselData.map((item) => (
  <img className="cursor-pointer" src={item.image} role="presentation" alt="" />
));

const MainCrosel = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);

export default MainCrosel;
