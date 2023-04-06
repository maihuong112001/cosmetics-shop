import { useState } from "react";
import classNames from "classnames/bind";
import { Space, Tag } from "antd";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import styles from "./ActionHeader.module.scss";
import GlideModal from "../Modal/GlideModal/GlideModal";

const cx = classNames.bind(styles);
const onSearch = (value) => console.log(value);

export default function ActionHeader() {
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

  return (
    <div className="ml-auto mr-8 flex items-center">
      <div className="flex lg:ml-6">
        <SearchOutlined
          className={cx("ant-icon")}
          onClick={() => setIsShowSearchModal(true)}
        />
        {isShowSearchModal && (
          <GlideModal onClickBG={() => {
            setIsShowSearchModal(false);
          }}>
            {/* <GlideModal
            onClickBG={() => {
              setIsShowSearchModal(false);
            }}
          > */}
            <div className="bg-white w-full px-56 py-10">
              <CloseOutlined
                className={cx("ant-icon-close")}
                onClick={() => setIsShowSearchModal(false)}
              />
              <div className="relative mt-2 border-b-2 border-gray-100 focus-within:border-b-black">
                <input
                  type="text"
                  placeholder="Search..."
                  onSearch={onSearch}
                  name="search"
                  id="search"
                  className="block mt-20 w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-inset placeholder:text-gray-400 sm:leading-6"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <SearchOutlined className={cx("ant-icon-close")} />
                  </div>
                </div>
              </div>
              <Space className="text-black mt-16 pb-12" size={[0, 8]} wrap>
                <h5 className="pr-6">Top collection:</h5>
                <Tag>
                  <a href="./">All collection</a>
                </Tag>
                <Tag>
                  <a href="./">Bracelets</a>
                </Tag>
                <Tag>
                  <a href="./">Charms</a>
                </Tag>
                <Tag>
                  <a href="./">Earrings</a>
                </Tag>
                <Tag>
                  <a href="./">Necklaces</a>
                </Tag>
                <Tag>
                  <a href="./">Shop Earrings</a>
                </Tag>
                <Tag>
                  <a href="./">Wedding & Bridal</a>
                </Tag>
                <Tag>
                  <a href="./">Shop Earrings</a>
                </Tag>
              </Space>
            </div>
          </GlideModal>
        )}
      </div>

      <div className="flex lg:ml-6">
        {/* <div className="relative mt-1">
          <Popover.Button>
            <UserOutlined className={cx("ant-icon")} />
          </Popover.Button>
        </div> */}
        <Popover className="relative">
          <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-white-900">
            <UserOutlined className={cx("ant-icon")} />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute mt-5 w-screen -translate-x-1/2">
              <div className="w-screen max-w-md flex-auto overflow-hidden bg-white text-md shadow-lg">
                <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in
                      </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                      
                      <div className="-space-y-px shadow-sm">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            Email*
                          </label>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                            placeholder="Email*"
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="mt-4 relative block w-full border-0 py-1.5 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                            placeholder="Password*"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                          >
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <a
                            href="#./"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Forgot your password?
                          </a>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            {/* <LockClosedIcon
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            /> */}
                          </span>
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className="flex lg:ml-6">
        <HeartOutlined className={cx("ant-icon")} />
      </div>

      {/* Cart */}
      <div className="ml-4 flow-root lg:ml-6">
        <ShoppingCartOutlined className={cx("ant-icon")} />
      </div>
    </div>
  );
}
