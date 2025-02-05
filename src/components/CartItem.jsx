import Image from "next/image";
import React from "react";

import {RiDeleteBin6Line} from "react-icons/ri";
import {removeFromCart, updateCart} from "../../store/cartSlice";
import {useDispatch} from "react-redux";
// import {API_URL, STRAPI_API_TOKEN} from "../../utils/urls";

const CartItem = ({data}) => {
  const p = data;

  const dispatch = useDispatch();

  const updateCartItem = (e, key) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  // console.log(p?.thumbnail?.data?.attributes?.url);
  // console.log(p?.name);
  // console.log("this is data product:", p.colors.color);
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* IMAGE START */}
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          // src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${p?.thumbnail?.data?.attributes?.url}`}
          src={`${process.env.NEXT_PUBLIC_APP_API}/uploads/${p?.files[0]}`}
          // src={`http://127.0.0.1:1337${p?.thumbnail?.data?.attributes?.url}`}
          alt={p.name}
        />
      </div>
      {/* IMAGE END */}

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          {/* PRODUCT TITLE */}
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.detail}
          </div>

          {/* PRODUCT PRICE */}
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            THB : {p.price}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md font-medium text-black/[0.5] hidden md:block">
          {p.detail}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Color:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedColor")}
              >
                {p.colors.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.color}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedColor === item.color}
                    >
                      {item.color}
                    </option>
                  );
                })}
              </select>
              <div className="font-semibold">Size:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.sizes.map((item, i) => {
                  return (
                    <option
                      key={i}
                      value={item.size}
                      disabled={!item.enabled ? true : false}
                      selected={data.selectedSize === item.size}
                    >
                      {item.size}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({length: 10}, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option key={i} value={q} selected={data.quantity === q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({id: data.id}))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
