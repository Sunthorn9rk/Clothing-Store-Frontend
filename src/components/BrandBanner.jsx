import React from "react";

function BrandBanner() {
  return (
    <div className="w-full bg-black">
      <div className="flex flex-wrap p-6 gap-y-6">
        <div className="w-1/3 flex items-center justify-center bg-black md:flex-1">
          <img src="/VERSACE.png" alt="versace" className="" />
        </div>
        <div className="w-1/3 flex items-center justify-center bg-black md:flex-1">
          <img src="/ZARA.png" alt="zara" className="" />
        </div>
        <div className="w-1/3 flex items-center justify-center bg-black md:flex-1 ">
          <img src="/Gucci.png" alt="gucci" className="" />
        </div>
        <div className="w-1/2 flex items-center justify-center bg-black md:flex-1 ">
          <img src="/Prada.png" alt="prada" className="" />
        </div>
        <div className="w-1/2 flex items-center justify-center bg-black md:flex-1 ">
          <img src="/CalvinKlein.png" alt="calvinklein" className="" />
        </div>
      </div>
    </div>
  );
}

export default BrandBanner;
