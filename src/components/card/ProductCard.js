import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {Avatar, Card} from "antd";
import Link from "next/link";
const {Meta} = Card;
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa"; // นำเข้าไอคอนดาว
import {getDiscountPricePercentage} from "../../../utils/helper";

const ProductCard = ({data}) => {
  const calculateRating = (saleAmount) => {
    return Math.floor(saleAmount / 10);
  };
  const calculateRatingHalf = (saleAmount) => {
    const halfAmount = saleAmount % 10;
    return halfAmount >= 5 ? 1 : 0;
  };

  const rating = calculateRating(data.sale_amount);
  const ratingHalf = calculateRatingHalf(data.sale_amount);

  return (
    <Link
      href={`/product/${data.id}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Card
        className="my-4 border-0"
        style={{
          width: 300,
        }}
        cover={
          data.file === "no-image.jpg" ? (
            <div className="w-full h-80 overflow-hidden">
              <img
                alt="no-image"
                className="w-full h-full object-cover rounded-2xl"
                src={"http://localhost:5000/public/" + data.files[0]}
                // style={{width: "100%", height: 300}}
              />
            </div>
          ) : (
            <div className="w-full h-80 overflow-hidden">
              <img
                className="w-full h-full object-cover rounded-2xl"
                alt="example"
                src={"http://localhost:5000/uploads/" + data.files[0]}
              />
            </div>
          )
        }
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Meta title={data.name} />
        {/* แสดงดาวเรทติ้ง */}
        <div style={{display: "flex", alignItems: "center", marginTop: "10px"}}>
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
          <span class="text-2xl font-bold text-gray-900 ">฿{data?.price}</span>
          <span class="text-2xl font-bold line-through text-black/40 ">
            {data?.originalPrice}
          </span>
          <p className="text-sm font-medium text-red-500  p-1 rounded-full bg-gray-100">
            -{getDiscountPricePercentage(data?.originalPrice, data?.price)}%
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
