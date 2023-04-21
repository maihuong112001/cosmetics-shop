import { Result } from "antd";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="w-full mt-20 pt-96 pb-36">
      <Result
        status="success"
        title="You have made a successful purchase!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Link to="/orderDetail" className="py-4 px-8 rounded-lg bg-[#52c41a] text-white hover:bg-yellow-500 hover:text-white">
            View order details
          </Link>,
          <Link to="/" className="py-4 px-8 rounded-lg bg-yellow-500 text-white ml-12 hover:bg-[#52c41a] hover:text-white">Keep Buying</Link>,
        ]}
      />
    </div>
  );
}

export default OrderSuccess;
