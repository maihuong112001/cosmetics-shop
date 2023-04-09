import { Col, Row, Space, Divider } from "antd";
import { EnvironmentTwoTone, MailTwoTone } from "@ant-design/icons";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import InnerHeader from "../InnerHeader";
import { currencyService } from "@/services/curency.service";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
const languages = [
  {
    id: 1,
    name: "English",
  },
  {
    id: 2,
    name: "VietNam",
  },
];

function Header() {
  const dataCurrency=currencyService.getAddCurrency();
  const [selectedCurrency, setSelectedCurrency] = useState(dataCurrency[1]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]);
  const location = useLocation();
  return (
    <header className={cx("wrapper")}>
      <div
        className={`${cx("inner-about")} ${
          location.pathname !== "/" && "bg-black"
        } `}
      >
        <Row className="pt-4 text-white">
          <Col span={8}>
            <Space className="ml-10">
              <EnvironmentTwoTone className="icon-ant" twoToneColor="#fff" />
              <a href="./" className="text-[13px]">Store Location</a>
              <Divider type="vertical" />
              <MailTwoTone twoToneColor="#fff" />
              <a href="./" className="text-[13px]">support@mojuri.com</a>
            </Space>
          </Col>
          <Col span={8}>
            <p className="text-center text-[13px]">
              Summer sale discount off 30%! <a href="./">Shop Now</a>
            </p>
          </Col>
          <Col className="flex pl-[16%]" span={8}>
            <Listbox value={selectedCurrency} onChange={setSelectedCurrency}>
              {({ open }) => (
                <div className="relative mt-1 w-[40%] mr-0">
                  <Listbox.Button className="relative w-[100%] text-[13px] cursor bg-transparent py-1.5 text-left text-white">
                    <span className="flex items-center">
                      <img
                        src={selectedCurrency.avatar}
                        alt=""
                        className="h-7 w-7 flex-shrink-0"
                      />
                      <span className="ml-3 block truncate">
                        {selectedCurrency.name}
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
                    <Listbox.Options className="absolute z-10 max-h-56 w-[110px] overflow-auto bg-white pb-1 pt-10 px-4 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {dataCurrency.map((person) => (
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
                              <div className="flex items-center text-[13px]">
                                <img
                                  src={person.avatar}
                                  alt=""
                                  className="h-7 w-7 flex-shrink-0"
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
            <Divider className="flex mt-[10px]" type="vertical" />

            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
              {({ open }) => (
                <div className=" mt-1 w-[50%]">
                  <Listbox.Button className="relative w-[70%] cursor bg-transparent py-1.5 text-white text-[13px]">
                    <span className="flex items-center">
                      {selectedLanguage.name}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
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
                    <Listbox.Options className="absolute z-10 w-[120px] h-36 overflow-auto bg-white pb-1 pt-8 px-4 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {languages.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-white text-[#cb8161] cursor"
                                : "text-gray-900",
                              "relative cursor-default select-none border-t-[1px] p-3 pl-2 pr-2"
                            )
                          }
                          value={person}
                        >
                          {({ selectedLanguage, active }) => (
                            <>
                              <div className="flex text-[13px] items-center">
                                <span
                                  className={classNames(
                                    selectedLanguage
                                      ? "font-semibold"
                                      : "font-normal",
                                    "ml-3 block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>

                              {selectedLanguage ? (
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
          </Col>
        </Row>
      </div>
      <div
        className={`${cx("action-header")} ${
          location.pathname !== "/" && "bg-white text-black border-[1px] border-gray-300"
        } `}
      >
        <Row className="text-white ml-2 mt-10">
          <Col span={24}>
            <InnerHeader />
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
