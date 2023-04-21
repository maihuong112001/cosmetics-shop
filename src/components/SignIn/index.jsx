import classNames from "classnames/bind";
import { UserOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "@/store/slices/user.slice";
import styles from "./SignIn.module.scss";
import supabase from "@/services/supabase";

const cx = classNames.bind(styles);

export default function SignIn() {
  const { user } = useSelector((st) => st.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isShowSignInModal, setIsShowSignInModal] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChangeForm = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);
  const handleLogout = async () => {
    const { data, error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    } else {
      setIsShowSignInModal(false);
      navigate("/login");
      dispatch(setUser(data));
    }
  };
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsShowSignInModal(false);
      try {
        const { data, error } = await supabase.auth.signInWithPassword(form);
        if (error) {
          navigate("/login");
          throw new Error(error.message);
        } else {
          navigate("/account");
          dispatch(setUser(data.user));
        }
      } catch (error) {
        console.error(error);
      }
      console.log(form);
    },
    [dispatch, form, navigate]
  );

  return (
    <div className="flex lg:ml-6">
      <UserOutlined
        className={cx("ant-icon")}
        onClick={() => {
          setIsShowSignInModal(true);
        }}
      />

      {isShowSignInModal &&
        (user ? (
          <>
            <div
              className=" bg-transparent inset-0 absolute h-screen"
              onClick={() => {
                setIsShowSignInModal(false);
              }}
            />
            <div className="absolute mt-12 right-11 w-96 bg-white shadow-lg cursor-pointer">
              <p
                onClick={handleLogout}
                className="text-gray-500 pb-6 tracking-wider pt-10 ml-4"
              >
                Hello :
                <span className="text-gray-900 font-semibold ml-1">
                  {user?.email}
                </span>
              </p>
              <p
                onClick={handleLogout}
                className="text-gray-500 pb-10 border-t-[1px] border-gray-300 tracking-wider pt-6 pl-4"
              >
                Sign out
              </p>
            </div>
          </>
        ) : (
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
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                            placeholder="Email*"
                            value={form.email}
                            onChange={handleChangeForm}
                          />
                        </div>
                        <div className="relative">
                          <label htmlFor="password" className="sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type={isShowPassword ? "text" : "password"}
                            value={form.password}
                            onChange={handleChangeForm}
                            autoComplete="current-password"
                            required
                            className="mt-4 relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
                            placeholder="Password*"
                          />
                          <div className="right-8 -mt-14 absolute text-gray-600 text-[19px]">
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
        ))}
    </div>
  );
}
