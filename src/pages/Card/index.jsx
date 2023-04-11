import {
  CarTwoTone,
  GiftFilled,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import { Divider } from "antd";

import { productCardsService } from "@/services/productsInCard.service";
const cx = classNames.bind(styles);
function Card() {
  const dataProductCard = productCardsService.getAllProductCard();
  return (
    <div className="w-full pt-[220px]">
      <div className=" flow-root">
        <div className="bg-white text-center ">
          <h5 className="font-base text-[30px] pt-4 pb-16">Shopping Cart</h5>

          <div className="w-[35%] border-b-[3px] border-[#cb8161] ml-[33%]">
            <CarTwoTone
              twoToneColor="#cb8161"
              className="bg-white p-3 absolute rounded-3xl ml-[16%] -mt-6 border-[1px] border-[#cb8161]"
            />
          </div>
          <p className="text-gray-500 text-[14px] font-semi py-8">
            Congratulations , you've got free shipping!
          </p>
        </div>
        <div className="bg-white px-[15%]">
          <div className="mt-8">
            <div className="flex justify-between border-b-[1px] border-gray-300 py-6">
              <p>Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <div className="flow-root pt-10">
              <ul className="-my-6 divide-y divide-gray-200">
                {dataProductCard.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between text-[14px] font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.name}</a>
                          </h3>
                          <p className="ml-4">{product.price}</p>
                        </div>
                        <p className="mt-1 text-[14px] text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <div className="justify-center absolute text-center text-[14px] -mt-[5px] ml-[30%] space-y-3">
                        <div className={cx("cart-form")}>
                          <form>
                            <div className="flex border-[1px] h-14 mt-2 border-gray-300 px-2 pt-3">
                              <div className={cx("qty-btn")}>
                                <MinusOutlined
                                  style={{ fontSize: "12px", color: "black" }}
                                  className={cx("gsx")}
                                />
                              </div>
                              <input
                                className="bg-transparent w-[30px] leading-[40px]"
                                value={product.quantity}
                                readOnly
                                pattern="[0-9]"
                              ></input>
                              <div className={cx("qty-btn")}>
                                <PlusOutlined
                                  style={{ fontSize: "12px", color: "black" }}
                                />
                              </div>
                            </div>
                          </form>
                        </div>

                        <div className="">
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
        <div className="bg-white px-[15%] mt-16">
          <div className="flex justify-between border-t-[1px] border-gray-300 pt-10">
            <div>
              <div className="flex space-x-4 text-[16px]">
                <div className="text-yellow-400 mt-3">
                  <GiftFilled className="text-[18px]" />
                </div>
                <p className="mt-3">Add gift wrap</p>
                <Divider className="mt-4" type="vertical" />
                <p className="text-[#cb8161] mt-3">Only $10.00</p>
                <a
                  href="./"
                  className="w-[150px] text-center font-medium bg-white text-black border-[1px] border-black px-6 py-4 shadow-sm hover:bg-[#cb8161] hover:text-white hover:border-[#cb8161]"
                >
                  Add A Gift Wrap
                </a>
              </div>
              <p className="font-semi py-4">Special instructions for seller</p>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  placeholder="How can we help you?"
                  rows={3}
                  className="block w-[430px] min-h-[100px] p-4 border-0 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300"
                  defaultValue={""}
                />
              </div>

              <p className="font-semi py-4">Coupon</p>
              <p className="text-gray-500 text-[14px] font-semi py-8">
                * Discount will be calculated and applied at checkout
              </p>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  placeholder="Coupon code"
                  rows={3}
                  className="block w-[430px] max-h-[50px] p-4 border-0 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300"
                  defaultValue={""}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-end text-md font-semi text-gray-900 mt-2">
                <p>Subtotal: </p>
                <p>$262.00</p>
              </div>
              <p className="mt-0.5 text-[12px] font-semi text-gray-500 pt-3 pb-6">
                Taxes and shipping calculated at checkout
              </p>
              <a
                href="./"
                className=" text-center bg-black px-6 py-4 block font-medium text-white shadow-sm hover:bg-[#cb8161] hover:text-white"
              >
                CHECK OUT
              </a>
            </div>
          </div>
          <div className="w-full bg-gray-100 mt-14 p-12 text-center">
            <p className="text-base text-[16px]">Get shipping estimates</p>
            <div className="flex justify-between py-12">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-[180px] px-6 py-4 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-300"
                  >
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-[180px] px-6 py-4 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-300"
                  >
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full">
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="block w-[180px] px-6 py-4 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300"
                  />
                </div>
              </div>
              <a
                href="./"
                className="w-[180px] text-center bg-black px-6 pt-6 font-semi text-[13px]  text-white shadow-sm hover:bg-[#cb8161] hover:text-white"
              >
                ESTIMATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

// function getAll() {
//   const data = productService.getAllProduct();
// }
