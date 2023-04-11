import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useState } from "react";
function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="w-full pt-[220px] mb-[80px] px-[12%]">
      <h2 className="mt-6 py-12 text-center text-[38px] tracking-wide font-semi text-gray-900">
        Account
      </h2>
      <div className="w-full flex">
        <div className="w-full">
          <h2 className="ml-10 py-4 text-[22px] tracking-wide font-semi text-gray-900">
            Sign in
          </h2>
          <form className="mt-8 space-y-12 mx-10" action="#" method="POST">
            <div className="space-y-10 shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email*
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="relative w-[80%] text-[14px] block border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
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
                  type={isShowPassword ? 'text':'password'}
                  required
                  className="mt-4 relative w-[80%] text-[14px] block border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                  placeholder="Password*"
                />
                <div className="w-[30%] -mt-14 absolute text-gray-600 text-[19px] text-end">
                  {isShowPassword ? (
                    <EyeOutlined
                      onClick={() => {
                        setIsShowPassword(false);
                      }}
                    />
                  ) : (
                    <EyeInvisibleOutlined
                      onClick={() => {
                        setIsShowPassword(true);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="text-md">
              <a
                href="#./"
                className="font-semi text-gray-800 hover:text-[#cb8161] hover:border-[#cb8161] border-b-[1px] border-gray-800"
              >
                Forgot your password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="group relative tracking-wider flex w-[80%] justify-center bg-black px-3 py-4 text-md font-semi text-white hover:bg-[#cb8161]"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
        <div className="W-[400px]">
          <p className="text-[22px] tracking-wide font-semi text-gray-900">
            New customer?
          </p>
          <p className="text-gray-400 py-10">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <div>
            <button
              type="submit"
              className="group relative tracking-wider flex w-[35%] justify-center bg-black px-3 py-4 text-md font-semi text-white hover:bg-[#cb8161]"
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
