import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard w-[15rem] m-3 mb-20 mt-20 ml-20  transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img className="h-full w-full" src={product.imageUrl} alt=""></img>
      </div>

      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand} </p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-semibold">
            {product.discountPersent} % off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
