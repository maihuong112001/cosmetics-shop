import React from "react";
import { Link, Navigate } from "react-router-dom";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { useSelector } from "react-redux";
import supabase from "@/services/supabase";
import { setUser } from "@/store/slices/user.slice";

export default function MyAccount() {
  const { user } = useSelector((state) => state.user);
  const handleLogout = async () => {
    const { data, error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    } else {
      Navigate("/login");
      dispatchEvent(setUser(data));
    }
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
            className="border-b-[1px] border-gray-200 flex w-full pl-8 px-3 py-5 text-md font-semi text-black bg-gray-100 hover:text-[#cb8161]"
          >
            Addresses (2)
          </Link>
        </div>
        <div className="w-[60%] pl-10">
          <p className="text-gray-500 pb-6">Hello: {user?.email}</p>
          <p className="text-gray-500 pb-6">Email: {user?.email}</p>
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
