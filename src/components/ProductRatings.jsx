import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props) => {
  const starNumber = props.avgRatings;
  const ratingNumber = props.ratings;
  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon className="h-[20px] stroke-[#F1B61F] fill-[#F1B61F]" />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon className="h-[20px] stroke-[#F1B61F] " />
      ))}
      <div className="ml-3 text-blue-500">{ratingNumber} ratings</div>
    </div>
  );
};

export default ProductRatings;
