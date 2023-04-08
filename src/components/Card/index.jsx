import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import {
  ShoppingCartOutlined,
  CloseOutlined,
  CarTwoTone,
  EditFilled,
  GiftFilled,
  CodepenSquareFilled,
  StarFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { Button, Drawer } from "antd";

import { products } from "@/data/productsInCard.mock";

const cx = classNames.bind(styles);

function Card() {
  const [isShowCardModal, setIsShowCardInModal] = useState(false);
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <ShoppingCartOutlined
        className={cx("ant-icon")}
        onClick={() => {
          setIsShowCardInModal(true);
        }}
      />

      <Drawer
        closable={false}
        placement="right"
        onClose={() => {
          setIsShowCardInModal(false);
        }}
        open={isShowCardModal}
      >
        <div className="bg-white t-0 z-50">
          <Button
            type=""
            className="text-[10px] font-base tracking-wider tracking-4 ml-[70%] absolute -mt-4"
            onClick={() => {
              setIsShowCardInModal(false);
            }}
          >
            CLOSE
            <CloseOutlined />
          </Button>
          <h1 className="font-semi pt-4">Shopping Cart (4)</h1>
          <p className="text-gray-500 text-[12px] font-semi py-6">
            Congratulations , you've got free shipping!
          </p>
          <div className="border-b-[3px] border-[#cb8161]">
            <CarTwoTone
              twoToneColor="#cb8161"
              className="bg-white p-3 absolute rounded-3xl ml-[80%] -mt-6 border-[1px] border-[#cb8161]"
            />
          </div>
        </div>
        <div className="bg-white">
          <div className="mt-8">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200 max-h-[200px] overflow-y-auto">
                {products.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {product.quantity}</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="flex justify-center space-x-12 border-b-[1px] border-gray-300">
            <div className="text-md text-center py-6">
              <GiftFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Add gift wrap</p>
            </div>
            <div className="text-md text-center py-6">
              <EditFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Add note</p>
            </div>
            <div className="text-md text-center py-6">
              <StarFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Coupon</p>
            </div>
            <div className="text-md text-center py-6">
              <CodepenSquareFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Shipping</p>
            </div>
          </div>
          <div className=" px-4 py-6 sm:px-6">
            <div className="flex justify-between text-md font-semi text-gray-900">
              <p>Subtotal: </p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-[12px] font-semi text-gray-500">
              Taxes and shipping calculated at checkout
            </p>
            <div className="mt-6 tracking-wider flex space-x-12">
              <a
                href="./"
                className="w-[48%] text-center bg-black px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-[#cb8161] hover:text-white"
              >
                CHECK OUT
              </a>

              <a
                href="./card"
                className="w-[48%] text-center bg-white text-black border-[1px] border-black px-6 py-4 text-base font-medium shadow-sm hover:bg-[#cb8161] hover:text-white hover:border-[#cb8161]"
              >
                VIEW CARD
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Card;
