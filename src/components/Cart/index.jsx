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
import { Button, Drawer, Badge, InputNumber } from "antd";

import { productCardsService } from "@/services/productsInCard.service";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

function Card({ isFixed }) {
  const location = useLocation();
  const dataProductsCard = productCardsService.getAllProductCard();
  const [isShowCardModal, setIsShowCardInModal] = useState(false);
  const onChangeQuantity = (value) => {
    console.log("changed", value);
  };
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Badge count={5} size="small">
        <ShoppingCartOutlined
          size="large"
          className={`${cx("ant-icon")} ${
            (isFixed || location.pathname !== "/") && "text-black"
          } `}
          onClick={() => {
            setIsShowCardInModal(true);
          }}
        />
      </Badge>
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
            className="text-[12px] font-base tracking-wider tracking-4 ml-[70%] absolute -mt-4"
            onClick={() => {
              setIsShowCardInModal(false);
            }}
          >
            CLOSE
            <CloseOutlined />
          </Button>
          <h1 className="font-semi text-[16px] pt-4">Shopping Cart (4)</h1>
          <p className="text-gray-500 text-[15px] font-semi py-6">
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
                {dataProductsCard.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-[75px] w-[75px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-[14px] text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4 mr-3">{product.price}</p>
                        </div>
                        <p className="mt-1 text-[13px] text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <InputNumber
                          min={1}
                          max={100}
                          defaultValue={product.quantity}
                          onChange={onChangeQuantity}
                        />
                        <div className="flex">
                          <button
                            type="button"
                            className="text-[12px] font-medium text-indigo-600 hover:text-indigo-500 mr-3"
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
        <div className="bg-white w-full pt-6">
          <div className="flex justify-center space-x-12 border-b-[1px] border-gray-300">
            <div className="text-3xl text-center py-6">
              <GiftFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Add gift wrap</p>
            </div>
            <div className="text-3xl text-center py-6">
              <EditFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Add note</p>
            </div>
            <div className="text-3xl text-center py-6">
              <StarFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Coupon</p>
            </div>
            <div className="text-3xl text-center py-6">
              <CodepenSquareFilled className="border-[1px] border-gray-200 bg-gray-200 rounded-full p-4" />
              <p className="text-sm">Shipping</p>
            </div>
          </div>
          <div className=" px-4 py-6 sm:px-6">
            <div className="flex justify-between text-3xl font-semi text-gray-900">
              <p>Subtotal: </p>
              <p>$262.00</p>
            </div>
            <p className="mt-1 text-[15px] font-semi text-gray-500">
              Taxes and shipping calculated at checkout
            </p>
            <div className="mt-8 tracking-wider flex space-x-12">
              <a
                href="./"
                className="w-[48%] text-center bg-black px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-[#cb8161] hover:text-white"
              >
                CHECK OUT
              </a>

              <a
                href="./cart"
                className="w-[48%] text-center bg-white text-black border-[1px] border-black px-6 py-4 text-base font-medium shadow-sm hover:bg-[#cb8161] hover:text-white hover:border-[#cb8161]"
              >
                VIEW CART
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Card;
