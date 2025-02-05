"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import {FaStar} from "react-icons/fa";
import {getDiscountPricePercentage} from "../../utils/helper";

const RelateProducts = ({products}) => {
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1023, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 767, min: 0},
      items: 1,
    },
  };

  console.log("this is relate product:", products);
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-3xl uppercase font-extrabold mb-5 text-center">
        You Might Also Like
      </div>
      {products.length > 0 ? (
        <Carousel
          responsive={responsive}
          containerClass="-mx-[10px]"
          itemClass="px-[10px]"
        >
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </Carousel>
      ) : (
        <div>No related products found.</div>
      )}
    </div>
  );
};

export default RelateProducts;
