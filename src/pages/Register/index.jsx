import supabase from "@/services/supabase";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleChangeForm = useCallback((e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data, error } = await supabase.auth.signUp(form);
        if (error) {
          throw new Error(error.message);
        } else {
          console.log(data);
          navigate("/login");
        }
      } catch (error) {
        alert(error);
      }
      console.log(form);
    },
    [form, navigate]
  );

  return (
    <div className="w-full pt-[220px] px-[30%]">
      <h2 className="mt-6 py-12 text-center text-[38px] tracking-wide font-semi text-gray-900">
        Create Account
      </h2>

      <form className="mt-8 space-y-12 mx-10" onSubmit={handleSubmit}>
        <div className="space-y-8 shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email*
            </label>
            <input
              onChange={handleChangeForm}
              id="email-address"
              name="email"
              type="email"
              value={form.email}
              required
              className="relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
              placeholder="Email*"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              onChange={handleChangeForm}
              id="password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              required
              value={form.password}
              className="mt-4 relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
              placeholder="Password*"
            />
            <div className="right-[33%] -mt-14 absolute text-gray-600 text-[19px]">
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
        <p className="text-gray-400 font-semi text-[15px]">
          Sign up for early Sale access plus tailored new arrivals, trends and
          promotions. To opt out, click unsubscribe in our emails.
        </p>
        <div>
          <button
            type="submit"
            className="group relative tracking-wider flex w-full justify-center bg-black px-3 py-4 text-md font-semi text-white hover:bg-[#cb8161]"
          >
            REGISTER
          </button>
        </div>
      </form>
      <div className="mx-10 pt-10 pb-10">
        <Link
          to={"/login"}
          className="group border-[1px] text-black tracking-wider border-black relative flex w-full justify-center px-3 py-4 text-md font-semi hover:text-white hover:bg-[#cb8161]"
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default Register;
