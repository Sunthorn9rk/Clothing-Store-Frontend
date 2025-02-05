import React from "react";
import {getDiscountPricePercentage} from "../../utils/helper";
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"; // นำเข้าไอคอนดาว

function ProductCard(p) {
  const calculateRating = (saleAmount) => {
    return Math.floor(saleAmount / 10);
  };
  const calculateRatingHalf = (saleAmount) => {
    const halfAmount = saleAmount % 10;
    return halfAmount >= 5 ? 1 : 0;
  };

  const rating = calculateRating(p?.data?.sale_amount);
  const ratingHalf = calculateRatingHalf(p?.data?.sale_amount);

  // console.log("this is p data:", p);
  return (
    <div className="w-full">
      <div className="flex">
        {/* start of item1 */}
        <div class="w-full bg-white p-2">
          <a href={`/product/${p?.data?.id}`}>
            {/* <a href="#" className=""> */}
            <img
              className="rounded-2xl"
              src={`${process.env.NEXT_PUBLIC_APP_API}/uploads/${p?.data?.files[0]}`}
              width={500}
              alt="product-image1"
            />
            {/* </a> */}
            <div class="p-4">
              {/* <a href={`/product/${p?.data?.id}`}> */}
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {p?.data?.name}
              </h5>
              {/* </a> */}
              {/* แสดงดาวเรทติ้ง */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                {[...Array(5)].map((_, index) => {
                  if (index < rating) {
                    return <FaStar key={index} color="gold" />;
                  } else if (index === rating && ratingHalf === 1) {
                    return <FaStarHalfAlt key={index} color="gold" />;
                  } else {
                    return <FaRegStar key={index} color="gold" />;
                  }
                })}
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-gray-900 ">
                  {p?.data?.price}
                </span>
                <span class="text-2xl font-bold line-through text-black/40 ">
                  {p?.data?.originalPrice}
                </span>
                <p className="text-sm font-medium text-red-500  p-1 rounded-full bg-gray-100">
                  -
                  {getDiscountPricePercentage(
                    p?.data?.originalPrice,
                    p?.data?.price
                  )}
                  %
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
