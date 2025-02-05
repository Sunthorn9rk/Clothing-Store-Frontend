"use client";
// library
import React, {useEffect, useState} from "react";
import {IoMdHeartEmpty} from "react-icons/io";
// import ReactMarkdown from "react-markdown";
import {useSelector, useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// components
import RelateProducts from "../../../components/RelateProduct";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import Wrapper from "@/components/Wrapper";
import {addToCart} from "../../../../store/cartSlice";

// utils
import {fetchDataFromApi} from "../../../../utils/api";
import {getDiscountPricePercentage} from "../../../../utils/helper";
import Reviews from "@/components/Reviews";

const ProductDetails = (slug) => {
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const p = product;
  const [selectedColor, setSelectedcolor] = useState();
  const [selectedSize, setSelectedsize] = useState();
  const [showErrorColor, setShowErrorColor] = useState(false);
  const [showErrorSize, setShowErrorSize] = useState(false);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    if (slug.params.slug) {
      fetchProductDetails();
    }
  }, [slug.params.slug]);

  const fetchProductDetails = async () => {
    const ProductData = await fetchDataFromApi(`/product/${slug.params.slug}`);

    setProduct(ProductData);

    const ProductsData = await fetchDataFromApi(
      `/products?category=${ProductData.category}`
    );

    setProducts(ProductsData);
  };

  if (!product) return <div>Loading...</div>;

  const renderDescription = (description) => {
    return description?.map((item, index) => {
      if (item.type === "paragraph") {
        return (
          <p key={index}>
            {item.children.map((child, childIndex) => {
              if (child.type === "text") {
                if (child.bold) {
                  return <strong key={childIndex}>{child.text}</strong>;
                }
                return child.text;
              }
              return null;
            })}
          </p>
        );
      }
      return null;
    });
  };

  console.log("this is data Product: ", product);
  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[40px] lg:gap-[70px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p?.files} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p?.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg text-black/[0.5] mb-5">{p?.category}</div>

            {/* PRODUCT OPTION COLOR START */}
            <div className="mb-5">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-medium">Select Option</div>
                <div className="text-md font-medium text-black/[0.5]">
                  Select Color
                </div>
              </div>
              {/* HEADING END */}
              {/* Option START */}
              <div id="colorGrid" className="grid grid-cols-6 gap-2">
                {/* Option Color START */}
                {p?.colors?.map((color, i) => (
                  <div key={i} className={`text-center py-3 font-medium`}>
                    <div
                      className={`relative size-12 mx-auto rounded-full border-2 border-black hover:border-solid ${
                        selectedColor === color.color ? "" : "border-hidden"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 size-10 m-auto rounded-full border border-black ${
                          color.enabled
                            ? "cursor-pointer"
                            : "cursor-not-allowed bg-black/[0.1] opacity-50"
                        } `}
                        style={{backgroundColor: color.color}}
                        onClick={() => {
                          if (color.enabled) {
                            setSelectedcolor(color.color);
                            setShowErrorColor(false);
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" capitalize">Color: {selectedColor}</div>

              {/* Option Color END */}
              {/* Option END */}
              {/* SHOW ERROR START */}
              {showErrorColor && (
                <div className="text-red-600 mt-1">
                  Color selection is required
                </div>
              )}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT OPTION END */}

            {/* PRODUCT OPTION SIZE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-end mb-2">
                <div className="text-md font-medium text-black/[0.5]">
                  Select Size
                </div>
              </div>
              {/* HEADING END */}
              {/* Option START */}
              <div id="sizeGrid" className="flex">
                {/* Option Size START */}
                {p?.sizes?.map((size, i) => (
                  <div key={i} className={`text-center py-3 font-medium`}>
                    <div
                      className={`mx-2 ${
                        selectedSize === size.size ? "" : "border-hidden"
                      }`}
                    >
                      <div
                        className={`border rounded-3xl py-4 px-6 hover:bg-black hover:text-white ${
                          size.enabled
                            ? "cursor-pointer"
                            : "cursor-not-allowed bg-black/[0.1] opacity-50"
                        } ${
                          selectedSize === size.size
                            ? "bg-black text-white"
                            : ""
                        }`}
                        onClick={() => {
                          if (size.enabled) {
                            setSelectedsize(size.size);
                            setShowErrorSize(false);
                          }
                        }}
                      >
                        <div className="flex justify-center items-center capitalize text-sm font-medium">
                          {size.size}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" capitalize">Size: {selectedSize}</div>
              {/* Option Color END */}
              {/* Option END */}
              {/* SHOW ERROR START */}
              {showErrorSize && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT OPTION END */}

            {/* PRODUCT PRICE */}
            <div className="text-black/[0.5] py-5">
              <div className="flex items-center">
                {p?.originalPrice && (
                  <>
                    <p className="mr-2 text-xl font-semibold my-2 line-through">
                      THB {p?.originalPrice} BATH
                    </p>
                    <p className="ml-auto text-base font-medium text-red-500">
                      off{" "}
                      {getDiscountPricePercentage(p?.originalPrice, p?.price)}%
                    </p>
                  </>
                )}
              </div>
              <div className="flex items-center">
                <p className="mr-2 text-xl font-semibold my-2 text-red-500">
                  THB {p?.price} BATH
                </p>
              </div>

              <div className="text-md font-medium text-black/[0.5] mb-5">
                (Total taxes and related fees)
              </div>
            </div>

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedColor) {
                  setShowErrorColor(true);
                  document.getElementById("colorGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else if (!selectedSize) {
                  setShowErrorSize(true);
                  document.getElementById("sizeGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else if (!selectedColor) {
                  setShowErrorColor(true);
                  document.getElementById("colorGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...p,
                      selectedColor,
                      selectedSize,
                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            {/* DETAIL PRODUCT START */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                {/* {renderDescription(p?.detail)} */}
                {p?.detail}
              </div>
            </div>
            {/* DETAIL PRODUCT END */}
          </div>
          {/* right column end */}
        </div>

        <Reviews />
        <RelateProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
