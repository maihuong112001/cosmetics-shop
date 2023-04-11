import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InfoCircleTwoTone } from "@ant-design/icons";

import { setUser } from "@/store/slices/user.slice";

export default function MyAccount({ setIsLoggedIn }) {
  const slice = setUser(useSelector);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="mt-96 p-28">
      <div className="text-center py-10">
        <h1 className="text-[40px] font-serif">My Account</h1>
      </div>

      <div className="flex pt-10">
        <div className="w-[250px]">
          <Link
            to={"/"}
            className="border-b-[1px] border-gray-200 flex w-full pl-8 px-3 py-5 text-md font-semi text-black bg-gray-100 hover:text-[#cb8161]"
          >
            Dashboard
          </Link>
          <Link
            to={"/account/addresses"}
            className="border-b-[1px] border-gray-200 flex w-full pl-8 px-3 py-5 text-md font-semi text-black bg-gray-100 hover:text-[#cb8161]"
          >
            Addresses (1)
          </Link>
          <Link
            to={"/"}
            onClick={handleLogout}
            className="border-b-[1px] border-gray-200 flex w-full pl-8 px-3 py-5 text-md font-semi text-black bg-gray-100 hover:text-[#cb8161]"
          >
            Log out
          </Link>
        </div>
        <div className="w-[60%] pl-10">
          <p className="text-gray-500 pb-6">
            Hello: {slice.type} (
            <Link to="/" onClick={handleLogout} className="text-red-600">
              Log Out)
            </Link>
          </p>
          <p className="text-gray-500 pb-6">Email: mhuong112001@gmail.com</p>
          <h1 className="text-[18px] pb-6">Order History</h1>
          <div className="text-gray-500">
            <InfoCircleTwoTone twoToneColor="#eb2f96" />
            <Link
              className="ml-4 mr-4 text-[#eb2f96] border-b-[1px] border-[#eb2f96]"
              to="/"
            >
              CREATE YOUR FIRST ORDER
            </Link>
            You haven't placed any orders yet.
          </div>
        </div>
      </div>
    </div>
  );
}
