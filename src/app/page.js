"use client";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import HeroBanner from "../components/HeroBanner";
import BrandBanner from "../components/BrandBanner";
import Category from "../components/Category";
import Testimonial from "../components/Testimonial";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";

// import {listby} from "../../functions/product";
// import {listby} from "@/functions/product";
// import {listby} from "@/functions/product";
import {getdata, listby} from "@/functions/product";

import {Button} from "antd";

// import file .env
// require("dotenv").config({path: `${process.cwd()}/.env`});

import ProductCard from "@/components/card/ProductCard";
import LoadingCard from "@/components/card/LoadingCard";
// import ProductCard from "../card/ProductCard";
// import LoadingCard from "../card/LoadingCard";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [productTop, setProductTop] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
    loadTopSellData();
  }, []);

  const loadData = async () => {
    await listby("createdAt", "desc")
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const loadTopSellData = async () => {
    await listby("sale_amount", "desc")
      .then((res) => {
        console.log(res.data);
        setProductTop(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main className="bg-white">
      <HeroBanner />
      <BrandBanner />
      <Wrapper>
        <h1
          id="new-arrivals"
          className="flex justify-center text-5xl font-black pt-20"
        >
          NEW ARRIVALS
        </h1>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 max-w-[1280px] mx-auto p-20 lg:p-0">
          {loading ? (
            <LoadingCard count={3} />
          ) : (
            // Loop items
            product.slice(0, 8).map((item) => <ProductCard data={item} />)
          )}

          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* products grid end */}
        <h1
          id="top-selling"
          className="flex justify-center text-5xl font-black pt-20"
        >
          TOP SELLING
        </h1>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 max-w-[1280px] mx-auto p-20 lg:p-0 ">
          {loading ? (
            <LoadingCard count={3} />
          ) : (
            // Loop items
            productTop.slice(0, 12).map((item) => <ProductCard data={item} />)
          )}
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* products grid end */}

        <div id="category">
          <Category />
        </div>
      </Wrapper>
      <Testimonial />
    </main>
  );
}
