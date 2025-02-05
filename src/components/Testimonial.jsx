"use client";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import {FaStar} from "react-icons/fa";
import {IoCheckmarkCircleSharp} from "react-icons/io5";
import {FaArrowRight} from "react-icons/fa6";
import {FaArrowLeft} from "react-icons/fa6";

function Testimonial() {
  return (
    <div className="w-full">
      <h1 className="text-center text-5xl font-black uppercase mt-20">
        Our Happy Customer
      </h1>
      <div className="relative text-white text-sm md:text-[20px] max-w-sm md:max-w-full mx-auto flex items-center justify-center p-16 ">
        <Carousel
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          centerMode={true}
          emulateTouch={true}
          renderArrowPrev={(clickHandler, hasPrev) => (
            <div onClick={clickHandler}>
              <FaArrowLeft className="size-6 absolute left-[70px] top-[90px] md:left-[90px] md:top-[100px] z-10 cursor-pointer hover:opacity-90 text-black" />
            </div>
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            <div onClick={clickHandler} className="">
              <FaArrowRight className="size-6 absolute right-[70px] top-[90px] md:right-[100px]  md:top-[100px] z-10   cursor-pointer hover:opacity-90 text-black " />
            </div>
          )}
          className="w-full border-2 rounded-3xl shadow-xl py-20"
        >
          <div className="flex items-center justify-center ">
            <div class="block max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow-xl space-y-2">
              <div className="flex gap-1">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
              </div>
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left flex">
                Sarah M.
                <IoCheckmarkCircleSharp className="text-green-500" />
              </div>
              <div class="font-normal text-gray-700 text-left">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div class="block max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow-xl space-y-2">
              <div className="flex gap-1">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
              </div>
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left flex">
                Sarah M.
                <IoCheckmarkCircleSharp className="text-green-500" />
              </div>
              <div class="font-normal text-gray-700 text-left">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div class="block max-w-2xl p-8 bg-white border border-gray-200 rounded-lg shadow-xl space-y-2">
              <div className="flex gap-1">
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
                <FaStar className="text-yellow-300" />
              </div>
              <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-left flex">
                Sarah M.
                <IoCheckmarkCircleSharp className="text-green-500" />
              </div>
              <div class="font-normal text-gray-700 text-left">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
