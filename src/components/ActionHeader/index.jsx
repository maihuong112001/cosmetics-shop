import { useState } from "react";
import classNames from "classnames/bind";
import { Space, Tag } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  CloseOutlined,
} from "@ant-design/icons";

import styles from "./ActionHeader.module.scss";
import GlideModal from "../Modal/GlideModal/GlideModal";
import SignIn from "@/components/SignIn";
import ProductCard from "@/components/Card"

const cx = classNames.bind(styles);
const onSearch = (value) => console.log(value);

export default function ActionHeader() {
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

  return (
    <div className="ml-auto mr-10 flex items-center">
      <div className="flex lg:ml-6">
        <SearchOutlined
          className={cx("ant-icon")}
          onClick={() => setIsShowSearchModal(true)}
        />
        {isShowSearchModal && (
          <GlideModal
            onClickBG={() => {
              setIsShowSearchModal(false);
            }}
          >
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
      {/*Modal Sign In */}
      <SignIn />
      <div className="flex lg:ml-6">
        <HeartOutlined className={cx("ant-icon")} />
      </div>

      {/*Product Cart */}
      <ProductCard/>
    </div>
  );
}
