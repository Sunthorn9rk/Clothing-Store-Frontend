"use client";
import React, {useState, useEffect} from "react";
import {IoCloseSharp} from "react-icons/io5";

const Ad_banner = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showBanner && (
      <div
        className={`bg-black text-white text-center p-2 w-full z-50 ${
          isFixed ? "fixed top-0 left-0" : "block"
        }`}
      >
        Sign up and get 20% off to your first order.{" "}
        <a href="/register" className="underline cursor-pointer">
          Sign Up Now
        </a>
        <button
          className="absolute top-1 right-4 mt-1 mr-2 text-white"
          onClick={() => setShowBanner(false)}
        >
          <IoCloseSharp className="size-6 mr-40" />
        </button>
      </div>
    )
  );
};

export default Ad_banner;
