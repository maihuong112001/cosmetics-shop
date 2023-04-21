import { CarryOutOutlined, RightOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function OrderList() {
  const { orderDetails } = useSelector((state) => state.orderDetail);
  console.log("hhhh",orderDetails);
  return (
    <div className="w-full">
      <div className="w-full border-[1px] rounded-lg border-blue-400 p-4 flex text-blue-500 text-4xl space-x-8 justify-center">
        <CarryOutOutlined className="mt-3" />
        <div className="text-2xl text-black">
          <p>
            Your package has been received and ready to be handed over to your
            shipping order.
          </p>
          <p className="text-gray-500">Expected delivery April 21</p>
        </div>
        <RightOutlined className="text-2xl text-gray-600 mt-4" />
      </div>
      <ul className="divide-y divide-gray-200">
        {orderDetails.map((orderDetail, index) => (
          <li key={index} className="flex py-6">
            <Badge count={orderDetail.quantity} size="default">
              <div className="h-[75px] w-[75px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={orderDetail.image}
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </Badge>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between font-semibold text-[13px] tracking-wider text-gray-800">
                  <h3>
                    <Link to="/">{orderDetail.name}</Link>
                  </h3>
                  <p className="ml-4 mr-3">${orderDetail.price}</p>
                </div>
                <p className="mt-1 text-[13px] text-gray-500">
                  white
                </p>
                <p>Quantity: 1</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
