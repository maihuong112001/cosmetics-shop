import classNames from "classnames/bind";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

import styles from "./SignIn.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function SignIn() {
  const [isShowSignInModal, setIsShowSignInModal] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log(username ,":", password);
  };
  return (
    <div className="flex lg:ml-6">
      <UserOutlined
        className={cx("ant-icon")}
        onClick={() => {
          setIsShowSignInModal(true);
        }}
      />

      {isShowSignInModal && (
        <div className="inset-0 h[40%] z-[99] fixed">
          <div
            className=" bg-[#000000af] inset-0 absolute"
            onClick={() => {
              setIsShowSignInModal(false);
            }}
          />
          <div className="glide-down w-[40%] z-[100]">
            <div className="w-full max-w-2lg overflow-hidden bg-white text-md shadow-lg ml-[80%] mt-28">
              <div className="flex justify-center py-12">
                <div className="w-[88%] space-y-8  border-[1px] ">
                  <div className="bg-white w-[115px] h-[34px] border-b-[1px] border-[#cb8161] ml-[39%] -mt-10">
                    <h2 className="mt-6 text-center text-3xl font-semi tracking-tight text-gray-900">
                      Sign in
                    </h2>
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-10 mx-10"
                    action="/account"
                    method="POST"
                  >
                    <div className="space-y-6 shadow-sm">
                      <div>
                        <label htmlFor="username" className="sr-only">
                          Email*
                        </label>
                        <input
                          id="username"
                          name="username"
                          type="email"
                          autoComplete="email"
                          required
                          className="relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                          placeholder="Email*"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="current-password"
                          required
                          className="mt-4 relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                          placeholder="Password*"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex text-[15px] items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 text-md w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-[18px] font-semibold font-lg text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-md">
                        <Link
                          to="./"
                          className="font-lg font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative flex w-full justify-center bg-[#cb8161] px-3 py-4 text-md font-semi text-white hover:bg-black"
                      >
                        SIGN IN
                      </button>
                    </div>
                  </form>
                  <div className="mx-10 pb-10">
                    <Link
                      to={"/account/register"}
                      onClick={() => {
                        setIsShowSignInModal(false);
                      }}
                      className="group border-[1px] border-black relative flex w-full justify-center px-3 py-4 text-md font-semi text-[#cb8161] hover:text-black"
                    >
                      CREATE YOUR ACCOUNT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
