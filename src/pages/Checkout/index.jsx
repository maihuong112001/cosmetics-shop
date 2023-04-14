import {
  CarOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Listbox, Transition } from "@headlessui/react";
import { Checkbox, Radio } from "antd";
import classNames from "classnames";
import { Fragment, useState } from "react";

import InvoicePaying from "@/components/InvoicePaying";
const people = [
  {
    id: 1,
    name: "United States",
  },
];
function Checkout() {
  const [value, setValue] = useState(1);
  const [selected, setSelected] = useState(people[0]);
  const onChangeDelivery = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="w-full flex">
      <div className="w-[50%] pt-16 px-28">
        <p className="py-2 font-semibold tracking-wider text-gray-900 text-[20px]">
          Mojuri – Jewelry & Fashion Store Shopify Theme
        </p>
        <div className="flex space-x-3 text-[11px] text-gray-500 py-2">
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
        <form className="space-y-12 py-2" action="#" method="POST">
          <input
            id="email-address"
            name="email"
            type="email"
            required
            className="relative rounded-lg w-full text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
            placeholder="Email"
          />

          <Checkbox onChange={onChange}>Email me with news and offers</Checkbox>

          <Radio.Group
            onChange={onChangeDelivery}
            value={value}
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

          <div>
            <p>Shipping address</p>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative flex w-full cursor-default rounded-md bg-white py-4 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6">
                      <span className="items-center">
                        <label className="ml-2 text-gray-500 text-[11px]">
                          Country/Region
                        </label>
                        <p className="ml-2 block truncate text-black text-[13px] mt-1">
                          {selected.name}
                        </p>
                      </span>
                      <span className="ml-[85%] text-gray-800 text-[11px] mt-3">
                        <DownOutlined />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[13px]">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-blue-500 text-white rounded-lg "
                                  : "text-white bg-blue-500 rounded-lg",
                                "relative cursor-default select-none py-3 pl-3 pr-9 tracking-wider"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.name}
                                  </span>
                                </div>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>

            <div className="w-full flex py-5 justify-between">
              <input
                id="first-name"
                name="firstName"
                type="text"
                required
                className="relative rounded-lg w-[47%] text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
                placeholder="First name"
              />

              <input
                id="last-name"
                name="lastName"
                type="text"
                required
                className="relative rounded-lg w-[47%] text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
                placeholder="Last name"
              />
            </div>

            <input
              id="address"
              name="address"
              type="text"
              required
              className="relative rounded-lg w-full text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
              placeholder="Address"
            />

            <input
              id="apartment"
              name="apartment"
              type="text"
              required
              className="mt-4 relative rounded-lg w-full text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
              placeholder="Apartment, suite, stc. (optional)"
            />

            <div className="w-full flex py-5 justify-between">
              <input
                id="city"
                name="city"
                type="text"
                required
                className="relative rounded-lg w-[30%] text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
                placeholder="City"
              />

              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <div className="relative w-[30%]">
                      <Listbox.Button className="relative flex w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6">
                        <span className="items-center">
                          <label className="ml-2 text-gray-500 text-[11px]">
                            Country/Region
                          </label>
                          <p className="ml-2 block truncate text-black text-[13px] mt-1">
                            {selected.name}
                          </p>
                        </span>
                        <span className="ml-[85%] text-gray-800 text-[11px] mt-3">
                          <DownOutlined />
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[13px]">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-blue-500 text-white rounded-lg "
                                    : "text-white bg-blue-500 rounded-lg",
                                  "relative cursor-default select-none py-3 pl-3 pr-9 tracking-wider"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

              <input
                id="ZIP-code"
                name="ZIPcode"
                type="text"
                required
                className="relative rounded-lg w-[30%] text-[14px] block border-0 py-5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400 focus-within:ring-blue-700 focus-within:ring-2"
                placeholder="ZIP code"
              />
            </div>

            <Checkbox onChange={onChange}>
              Save this information for next time
            </Checkbox>
          </div>

          <div className="w-full flex justify-between">
            <div className="flex text-blue-500 text-[14px] space-x-3">
              <LeftOutlined className="mt-[3px]" />
              <p>Return ro cart</p>
            </div>
            <button
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
