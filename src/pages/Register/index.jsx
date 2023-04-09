import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="w-full pt-[220px] px-[30%]">
      <h2 className="mt-6 py-12 text-center text-[38px] tracking-wide font-semi text-gray-900">
        Create Account
      </h2>

      <form className="mt-8 space-y-12 mx-10" action="#" method="POST">
        <div className="space-y-8 shadow-sm">
          <div>
            <label htmlFor="email-address" className="sr-only">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email*
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
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
              id="password"
              name="password"
              type="password"
              required
              className="mt-4 relative text-[14px] block w-full border-0 py-4 px-3 text-gray-900 ring-1 ring-gray-300 placeholder:text-gray-400"
              placeholder="Password*"
            />
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
          to={'/account/login'}
          className="group border-[1px] text-black tracking-wider border-black relative flex w-full justify-center px-3 py-4 text-md font-semi hover:text-white hover:bg-[#cb8161]"
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default Register;
