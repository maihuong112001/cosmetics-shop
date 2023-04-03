import { Col, Row, Space, Divider, Dropdown, Select } from "antd";
import {
  EnvironmentTwoTone,
  MailTwoTone,
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "@/assets/images";

const cx = classNames.bind(styles);
const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner-about")}>
        <Row className="pt-4 text-white">
          <Col span={8}>
            <Space className="ml-10">
              <EnvironmentTwoTone twoToneColor="#fff" />
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
          <Col className="pl-96" span={8}>
            <Space wrap>
              <Select
                className="w-35"
                defaultValue="USD"
                bordered={false}
                options={[
                  {
                    value: "USD",
                    label: "USD",
                    img: <img src={images.usd} alt=""></img>,
                  },
                  {
                    value: "EUR",
                    label: "EUR",
                    img: <img src={images.eur} alt=""></img>,
                  },
                  {
                    value: "GBP",
                    label: "GBP",
                    img: <img src={images.gbp} alt=""></img>,
                  },
                ]}
              />
            </Space>
            <Divider type="vertical" />
            <Space wrap>
              <Select
                className="min-w-38 text-white"
                defaultValue="English"
                bordered={false}
                options={[
                  {
                    value: "English",
                    label: "English",
                  },
                  {
                    value: "Deutsch",
                    label: "Deutsch",
                  },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>
      <div className="w-100 h-54 mt-6">
        <Row className="text-white ml-2">
          <Col span={8} className="pl-7">
            <a href="./">
              <img src={images.logo} alt="logo" className="h-12"></img>
            </a>
          </Col>
          <Col span={8}>
            <div className="bg-transparent">
              <header className="relative">
                <nav
                  aria-label="Top"
                  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                >
                  <div>
                    <div className="flex h-16 items-center">
                      {/* Flyout menus */}
                      <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                        <div className="flex h-full space-x-8">
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {() => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button>
                                      {category.name}
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div
                                        className="absolute inset-0 top-1/2 bg-white shadow"
                                        aria-hidden="true"
                                      />

                                      <div className="relative bg-white">
                                        <div className="mx-auto max-w-7xl px-8">
                                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                            <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                              {category.featured.map((item) => (
                                                <div
                                                  key={item.name}
                                                  className="group relative text-base sm:text-sm"
                                                >
                                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center"
                                                    />
                                                  </div>
                                                  <a
                                                    href={item.href}
                                                    className="mt-6 block font-medium text-gray-900"
                                                  >
                                                    <span
                                                      className="absolute inset-0 z-10"
                                                      aria-hidden="true"
                                                    />
                                                    {item.name}
                                                  </a>
                                                  <p
                                                    aria-hidden="true"
                                                    className="mt-1"
                                                  >
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                              {category.sections.map(
                                                (section) => (
                                                  <div key={section.name}>
                                                    <p
                                                      id={`${section.name}-heading`}
                                                      className="font-medium text-gray-900"
                                                    >
                                                      {section.name}
                                                    </p>
                                                    <ul
                                                      role="list"
                                                      aria-labelledby={`${section.name}-heading`}
                                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                      {section.items.map(
                                                        (item) => (
                                                          <li
                                                            key={item.name}
                                                            className="flex"
                                                          >
                                                            <a
                                                              href={item.href}
                                                              className="hover:text-gray-800"
                                                            >
                                                              {item.name}
                                                            </a>
                                                          </li>
                                                        )
                                                      )}
                                                    </ul>
                                                  </div>
                                                )
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}

                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </Col>
          <Col span={8}>
            <Space className="pl-96">
              <SearchOutlined className="ml-20" />
              <UserOutlined className="ml-3" />
              <HeartOutlined className="ml-3" />
              <ShoppingCartOutlined className="ml-3" />
            </Space>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header;
