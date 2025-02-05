export const getDiscountPricePercentage = (originalPrice, discountPrice) => {
  const discount = originalPrice - discountPrice;

  const discountPercentage = (discount / originalPrice) * 100;

  return Math.ceil(discountPercentage);
};
