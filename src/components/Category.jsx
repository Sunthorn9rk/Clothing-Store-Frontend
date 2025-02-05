import React from "react";

function Category() {
  return (
    <div className="w-full bg-white p-10">
      <div className="bg-[#F0F0F0] max-w-[1280px] mx-auto p-20 rounded-3xl">
        <h1 className="text-center text-5xl font-black mb-16">
          BROWSE BY DRESS STYLE
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <a
            href="#"
            className="flex items-center justify-center w-full h-80 relative bg-white overflow-hidden rounded-xl"
          >
            <img
              src="/cover/bottom-cover.png"
              className=" object-cover w-44 ml-52 mb-64"
            />
            <div className="text-black/[90] text-4xl font-semibold absolute top-[40px] left-8">
              Bottoms
            </div>
          </a>
          <a
            href="#"
            className="lg:col-span-2 flex items-center justify-center  w-full h-80 relative bg-white overflow-hidden rounded-xl"
          >
            <img
              src="/cover/shirt-cover.png"
              className=" object-cover h-96 w-full ml-40"
            />
            <div className="text-black/[90] text-4xl font-semibold absolute top-[40px] left-8">
              T-Shirts
            </div>
          </a>
          <a
            href="#"
            className="lg:col-span-2 lg:row-start-2 flex items-center justify-center  w-full h-80 relative bg-white overflow-hidden rounded-xl"
          >
            <img
              src="/cover/outerware-cover.png"
              className=" object-cover h-full w-60 ml-52"
            />
            <div className="text-black/[90] text-4xl font-semibold absolute top-[40px] left-8">
              Outerwear
            </div>
          </a>
          <a
            href="#"
            className="lg:col-start-3 lg:row-start-2 flex items-center justify-center  w-full h-80 relative bg-white overflow-hidden rounded-xl"
          >
            <img
              src="/cover/assessories-cover.png"
              className=" object-cover mt-72 ml-10 w-full"
            />
            <div className="text-black/[90] text-4xl font-semibold absolute top-[40px] left-8">
              Accessories
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Category;
