import { Badge, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        <li className="flex py-6">
          <Badge count={product.quantity} size="default">
            <div className="h-[79px] w-[79px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.image}
                alt="product"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Badge>

          <div className="ml-5 flex flex-1 flex-col text-[13px] text-gray-500">
            <div>
              <div className="font-semibold text-[13px] tracking-wider text-gray-800">
                <h3>
                  <Link to="/">{product.name}</Link>
                </h3>
              </div>
              <p>white</p>
              <p>${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductItem;
