import Image from "next/image";
import React from "react";

function HeroBanner() {
  return (
    <section className="sm:flex-row md:flex-row lg:flex w-full bg-[#F2F0F1]">
      <div className="flex-1 content-center max-w-[600px] mx-auto space-y-4 pt-10  text-center md:max-w-full xl:mr-1 xl:px-32 xl:text-left">
        <h1 className="text-5xl font-black space-y-2">
          <span className="block">FIND CLOTHES</span>
          <span className="block">THAT MATCHES</span>
          <span className="block">YOUR STYLE</span>
        </h1>
        <div className="text-black/60">
          Browse through our diverse range of meticulously crafted garments,
          designed
          <span className="block">
            to bring out your individuality and cater to your sense of style.
          </span>
        </div>
        <div>
          <button
            className="bg-black text-white text-lg p-4 w-full md:w-48 rounded-full "
            aria-label="Go to Shopping"
          >
            Shop Now
          </button>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 md:flex-1 flex items-center justify-center">
            <div>
              <h2 className="text-4xl font-bold">200+</h2>
              <span className="text-black/60 text-sm">
                International Brands
              </span>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center md:flex-1">
            <div>
              <h2 className="text-4xl font-bold">2,000+</h2>
              <span className="text-black/60 text-sm">
                High-Quality Products
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto md:flex-1 ">
            <div>
              <h2 className="text-4xl font-bold">30,000+</h2>
              <span className="text-black/60 text-sm">Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-initial max-w-[700px] mx-auto">
        <img
          src="/HeroBanner.png"
          alt="Hero-Banner"
          width={700}
          height={800}
          //   quality={100}
          className=""
        />
      </div>
    </section>
  );
}

export default HeroBanner;
