import {
  CarOutlined,
  LeftOutlined,
  RightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Checkbox, Radio } from "antd";
import { useCallback, useState } from "react";

import InvoicePaying from "@/components/InvoicePaying";
import { Link, useNavigate } from "react-router-dom";
import supabase from "@/services/supabase";
import { useSelector } from "react-redux";
function Checkout() {
  const navigate = useNavigate();
  const [disableCheckOut, setDisableCheckOut] = useState(false);
  const [form, setForm] = useState({
    email: "",
    phoneNumber: "",
    address: "",
    firstName: "",
    lastName: "",
  });
  const [valueShip, setValueShip] = useState(1);
  const carts = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.user);
  const handleChangeForm = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const onChangeDelivery = (e) => {
    if (e.target.value === 1) {
      setDisableCheckOut(false);
    } else {
      setDisableCheckOut(true);
    }
    setValueShip(e.target.value);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const responseDataOrder = await supabase
          .from("order")
          .insert({
            user_id: user?.id,
            email: form.email,
            address: form.address,
            phoneNumber: form.phoneNumber,
            customerName: form.firstName + " " + form.lastName,
          })
          .select()
          .single();
        if (responseDataOrder.error) {
          throw new Error(responseDataOrder.message);
        } else {
          const { error } = await supabase
            .from("orderDetails")
            .insert(
              carts.items.map((item) => ({
                product_id: item.product.id,
                order_id: responseDataOrder.data.id,
                quantity: item.quantity,
                price: item.product.price,
                name: item.product.name,
                image: item.product?.images[0] || null,
              }))
            )
            .select();
          if (error) {
            throw new Error(responseDataOrder.message);
          } else {
            const { error } = await supabase
              .from("cart")
              .update({ items: {} })
              .eq("id_user", user?.id);
            if (error) {
              throw new Error(error.message);
            } else {
              navigate("/orderSuccess");
            }
          }
        }
      } catch (error) {
        alert(error);
      }
    },
    [carts.items, form.address, form.email, form.firstName, form.lastName, form.phoneNumber, navigate, user?.id]
  );
  return (
    <div className="w-full flex">
      <div className="w-[50%] pt-16 px-28">
        <p className="py-2 font-semibold tracking-wider text-gray-900 text-[20px]">
          Majuro – Jewelry & Fashion Store Shopify Theme
        </p>
        <div className="flex space-x-3 text-[11px] text-gray-500 py-2 cursor-pointer">
          <p className="text-[13px] text-blue-500">Cart</p>
          <RightOutlined className="pt-2" />
          <p className="text-[13px] text-black font-black">Information</p>
          <RightOutlined className="pt-2" />
          <p className="text-[13px]">Shipping</p>
          <RightOutlined className="pt-2" />
          <p className="text-[13px]">Payment</p>
        </div>
        <div className="flex justify-between py-2">
          <p className="text-gray-900 font-semibold text-[18px]">Contact</p>
          <p className="text-[14px]">Already have an account?</p>
        </div>
        <form className="space-y-12 py-2" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="email"
              name="email"
              onChange={handleChangeForm}
              value={form.email}
              id="floating_filled"
              required
              className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_filled"
              className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              Email
            </label>
          </div>

          <Checkbox onChange={onChange}>Email me with news and offers</Checkbox>

          <Radio.Group
            onChange={onChangeDelivery}
            value={valueShip}
            className="w-full"
          >
            <div direction="vertical w-full">
              <Radio
                value={1}
                className="py-6 pl-4 w-full border-[1px] border-gray-300 rounded-t-lg focus-within:border-[1px] focus-within:border-blue-600"
              >
                <CarOutlined /> Ship
              </Radio>

              <Radio
                value={2}
                className="py-6 pl-4 w-full border-[1px] border-t-0 border-gray-300 rounded-b-lg focus-within:border-[1px] focus-within:border-blue-600"
              >
                <ShopOutlined /> Pick up
              </Radio>
            </div>
          </Radio.Group>
          {valueShip === 1 ? (
            <div>
              <p>Shipping address</p>
              <select
                id="countries"
                className="mt-2 border border-gray-300 text-gray-500 text-2lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue>Choose a country</option>
                <option value="US">TP. Hồ Chí Minh</option>
                <option value="US">Hà Nội</option>
                <option value="US">TP. Đà Nẵng</option>
                <option value="US">TP. Huế</option>
                <option value="US">TP. Đồng Hới</option>
              </select>

              <div className="w-full flex py-5 justify-between">
                <div className="relative w-[47%]">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChangeForm}
                    value={form.firstName}
                    id="firstName"
                    required
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    First name
                  </label>
                </div>

                <div className="relative w-[47%]">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChangeForm}
                    value={form.lastName}
                    id="lastName"
                    required
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Last name
                  </label>
                </div>
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  name="address"
                  onChange={handleChangeForm}
                  value={form.address}
                  id="address"
                  required
                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="address"
                  className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Address
                </label>
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  name="apartment"
                  id="apartment"
                  required
                  className="mt-5 block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="apartment"
                  className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Apartment
                </label>
              </div>

              <div className="w-full flex py-5 justify-between">
                <div className="relative w-[30%]">
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={handleChangeForm}
                    value={form.phoneNumber}
                    id="phoneNumber"
                    required
                    className="block rounded-lg p-4 pt-5 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="phoneNumber"
                    className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Phone number
                  </label>
                </div>

                <select
                  id="countries"
                  className=" border border-gray-300 text-gray-500 text-2lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[30%] p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option defaultValue>country</option>
                  <option value="US">TP. Hồ Chí Minh</option>
                  <option value="US">Hà Nội</option>
                  <option value="US">TP. Đà Nẵng</option>
                  <option value="US">TP. Huế</option>
                  <option value="US">TP. Đồng Hới</option>
                </select>

                <div className="relative w-[30%]">
                  <input
                    type="text"
                    name="ZIPcode"
                    id="ZIPcode"
                    required
                    className="block rounded-lg p-4 w-full text-2lg text-gray-900 dark:bg-gray-700 border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="ZIPcode"
                    className="absolute text-2lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    ZIP code
                  </label>
                </div>
              </div>

              <Checkbox onChange={onChange}>
                Save this information for next time
              </Checkbox>
            </div>
          ) : (
            <div>
              <p className="text-black text-3lg font-semibold">
                Pickup locations
              </p>
              <div className="border-[1px] border-gray-300 rounded-lg py-8 text-center mt-10 text-md text-gray-600">
                <p>
                  Your order isn't available for pickup. Enter a shipping
                  address.
                </p>
              </div>
            </div>
          )}

          <div className="w-full flex justify-between">
            <Link
              to="/cart"
              className="flex text-blue-500 text-[14px] space-x-3 cursor-pointer"
            >
              <LeftOutlined className="mt-[3px]" />
              <p>Return ro cart</p>
            </Link>
            <button
              disabled={disableCheckOut}
              type="submit"
              className="group relative rounded-lg tracking-wider flex w-[30%] justify-center bg-black px-3 py-4 text-md font-semi text-white hover:bg-[#cb8161]"
            >
              CHECK OUT
            </button>
          </div>
        </form>
        <div className="w-full border-t-[1px] border-gray-300 mt-16 pt-6 text-gray-500 text-xl pb-10">
          <p>
            All rights reserved Mojuri – Jewelry & Fashion Store Shopify Theme
          </p>
        </div>
      </div>
      <div className="w-[50%] bg-gray-100 border-l-[1px] border-gray-300 pt-16 px-28">
        <InvoicePaying />
      </div>
    </div>
  );
}

export default Checkout;
