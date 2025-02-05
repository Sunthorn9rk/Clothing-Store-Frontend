"use client";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

const ProductDetailsCarousel = ({images}) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={200}
        className="productCarousel"
      >
        {/* <img src="../products/image_1.png" />
        <img src="../products/image_1.png" />
        <img src="../products/image_1.png" /> */}
        {images?.map((image, index) => (
          <img key={index} src={"http://localhost:5000/uploads/" + image} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
