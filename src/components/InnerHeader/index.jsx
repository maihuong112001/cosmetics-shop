import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { DownOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

import images from "@/assets/images";
import { menuDropdownService } from "@/services/menuDropdown.service";
import ActionHeader from "../ActionHeader";

export default function InnerHeader({ isFixed }) {
  const location = useLocation();
  const dataNavigation = menuDropdownService.getAllMenuDropdown();
  return (
    <header
      className={` bg-transparent ${
        isFixed
          ? "fixed top-0 bg-white shadow-md text-black w-full h-28 pt-8"
          : "relative"
      }`}
    >
      <nav aria-label="Top" className="mx-auto w-100 px-4">
        <div
          className={`flex h-16 ${
            location.pathname !== "/" && "text-black flex h-6"
          } `}
        >
          <div className="flex lg:ml-5">
            <a href="./">
              <span className="sr-only">Your Company</span>
              <img
                src={`${
                  location.pathname !== "/" || isFixed
                    ? `${images.logo_black}`
                    : `${images.logo}`
                } `}
                alt="logo"
                className="h-12"
              ></img>
            </a>
          </div>
          {/* Flyout menus */}
          <Popover.Group className="hidden lg:ml-auto lg:block lg:self-stretch">
            <div className="flex h-full space-x-8 pl-16">
              {/* pages */}
              {dataNavigation.pages.map((category) => (
                <Popover key={category.name} className="flex">
                  {() => (
                    <>
                      <div className="relative mt-2">
                        <Popover.Button className="tracking-wider">
                          {category.name}
                        </Popover.Button>
                        <DownOutlined className="text-sm ml-1" />
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
                        <Popover.Panel
                          className={`absolute inset-x-0 -mt-6 top-full text-gray-500 ${
                            location.pathname !== "/" &&
                            "absolute inset-x-0 top-full text-gray-500 mt-4 shadow-2xl"
                          } `}
                        >
                          <div className="relative bg-white">
                            <div className="mx-auto px-8 pt-14 pb-14">
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-[14px]"
                                  >
                                    <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                      />
                                    </div>
                                    <div className="mt-3 flex justify-center">
                                      <div>
                                        <h3 className="text-md text-gray-700">
                                          <a href={item.href}>
                                            <span
                                              aria-hidden="true"
                                              className="absolute inset-0"
                                            />
                                            {item.name}
                                          </a>
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}
              {/* shop */}
              {dataNavigation.categories.map((category) => (
                <Popover key={category.name} className="flex">
                  {() => (
                    <>
                      <div className="relative mt-2">
                        <Popover.Button className="tracking-wider">
                          {category.name}
                        </Popover.Button>
                        <DownOutlined className="text-sm ml-1" />
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
                        <Popover.Panel
                          className={`absolute inset-x-0 top-full text-gray-500 ${
                            location.pathname !== "/" &&
                            "absolute inset-x-0 top-full text-gray-500 mt-4 shadow-2xl"
                          } `}
                        >
                          <div className="relative bg-white">
                            <div className="mx-auto px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-base sm:text-md"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-md">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li
                                            key={item.name}
                                            className="flex text-[14px]"
                                          >
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
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

              {/* blogs */}
              {dataNavigation.blogs.map((category) => (
                <Popover key={category.name} className="flex">
                  {() => (
                    <>
                      <div className="relative mt-2">
                        <Popover.Button className="tracking-wider">
                          {category.name}
                        </Popover.Button>
                        <DownOutlined className="text-sm ml-1" />
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
                        <Popover.Panel
                          className={`absolute inset-x-0 top-full text-gray-500 ${
                            location.pathname !== "/" &&
                            "absolute inset-x-0 top-full text-gray-500 mt-4"
                          } `}
                        >
                          <div className="relative ">
                            <div
                              className={`mx-auto px-8 bg-white w-2/4 ${
                                location.pathname !== "/" &&
                                "mx-auto px-8 bg-white w-2/4 shadow-2xl"
                              } `}
                            >
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-base text-md"
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
                                        className="mt-6 block font-medium text-[14px] text-gray-600"
                                      >
                                        <span
                                          className="absolute inset-0 z-10"
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                      <p
                                        aria-hidden="true"
                                        className="mt-1 pb-8 text-[12px]"
                                      >
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-md">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-[14px] text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li
                                            key={item.name}
                                            className="flex text-[14px]"
                                          >
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
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

              {/* products */}
              {dataNavigation.products.map((category) => (
                <Popover key={category.name} className="flex">
                  {() => (
                    <>
                      <div className="relative mt-2">
                        <Popover.Button className="tracking-wider">
                          {category.name}
                        </Popover.Button>
                        <DownOutlined className="text-sm ml-1" />
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
                        <Popover.Panel
                          className={`absolute inset-x-0 top-full text-gray-500 ${
                            location.pathname !== "/" &&
                            "absolute inset-x-0 top-full text-gray-500 mt-4 shadow-2xl"
                          } `}
                        >
                          <div className="relative bg-white w-100">
                            <div className="mx-auto px-14 w-100">
                              <div className="py-16">
                                <div className="flex gap-x-96 gap-y-10 text-md">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-[14px] text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li
                                            key={item.name}
                                            className="flex text-[14px]"
                                          >
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
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

              {/* featureds */}
              {dataNavigation.featured.map((category) => (
                <Popover key={category.name} className="flex">
                  {() => (
                    <>
                      <div className="relative mt-2 space-x-1">
                        <Popover.Button className="tracking-wider">
                          {category.name}
                        </Popover.Button>
                        <DownOutlined className="text-sm ml-1" />
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
                        <Popover.Panel
                          className={`absolute inset-x-0 top-full text-gray-500 ${
                            location.pathname !== "/" &&
                            "absolute inset-x-0 top-full text-gray-500 mt-4 shadow-2xl"
                          } `}
                        >
                          <div className="relative bg-white w-100">
                            <div className="mx-auto px-10 w-100">
                              <div className="py-16">
                                <div className="flex gap-x-64 gap-y-10 text-md">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-[14px] text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li
                                            key={item.name}
                                            className="flex text-[14px]"
                                          >
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
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
            </div>
          </Popover.Group>
          <ActionHeader isFixed={isFixed}/>
        </div>
      </nav>
    </header>
  );
}
