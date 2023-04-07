import { Col, Row, Space, Divider, Select } from "antd";
import { EnvironmentTwoTone, MailTwoTone } from "@ant-design/icons";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import InnerHeader from "../InnerHeader";

const cx = classNames.bind(styles);
const people = [
  {
    id: 1,
    name: "USD",
    avatar:
      "https://cdn.shopify.com/s/files/1/0673/3588/1018/t/2/assets/usd.svg?19041994",
  },
  {
    id: 2,
    name: "EUR",
    avatar:
      "https://cdn.shopify.com/s/files/1/0673/3588/1018/t/2/assets/eur.svg?19041994",
  },
  {
    id: 3,
    name: "GBP",
    avatar:
      "https://cdn.shopify.com/s/files/1/0673/3588/1018/t/2/assets/gbp.svg?19041994",
  },
];

function Header() {
  const [selected, setSelected] = useState(people[1]);

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner-about")}>
        <Row className="pt-4 text-white">
          <Col span={8}>
            <Space className="ml-10">
              <EnvironmentTwoTone className="icon-ant" twoToneColor="#fff" />
              <a href="./">Store Location</a>
              <Divider type="vertical" />
              <MailTwoTone twoToneColor="#fff" />
              <a href="./">support@mojuri.com</a>
            </Space>
          </Col>
          <Col span={8}>
            <p className="text-center">
              Summer sale discount off 30%! <a href="./">Shop Now</a>
            </p>
          </Col>
          <Col className="pl-60" span={8}>
            <Listbox value={selected} onChange={setSelected}>
              {({ open }) => (
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-[30%] cursor bg-transparent py-1.5 text-left text-white">
                    <span className="flex items-center">
                      <img
                        src={selected.avatar}
                        alt=""
                        className="h-5 w-5 flex-shrink-0 rounded-full"
                      />
                      <span className="ml-3 block truncate">
                        {selected.name}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <DownOutlined
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 max-h-56 w-[50%] overflow-auto bg-white pb-1 pt-10 px-4 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-white text-[#cb8161]"
                                : "text-gray-900",
                              "relative cursor-default select-none border-t-[1px] p-3 pl-6 pr-2"
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <img
                                  src={person.avatar}
                                  alt=""
                                  className="h-5 w-5 flex-shrink-0 rounded-full"
                                />
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckOutlined
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              )}
            </Listbox>

            <Divider type="vertical" />
            <Space wrap>
              <Select
                className="w-[80px] text-white"
                defaultValue="English"
                bordered={false}
                options={[
                  {
                    value: "English",
                    label: "English",
                  },
                  {
                    value: "VietNam",
                    label: "VietNam",
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>
      <div className="w-100 h-54 mt-6">
        <Row className="text-white ml-2">
          <Col span={24}>
            <InnerHeader />
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
