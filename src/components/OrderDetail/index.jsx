import {
  CaretRightOutlined,
  CarryOutOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import ProductItem from "./ProductItem";
const { Panel } = Collapse;

function OrderDetail({ orders }) {
  console.log(orders);
  return (
    <div className="w-full mt-10 pt-96 pb-36">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        {orders?.map((order) => (
          <Panel
            header={
              <>
                <div className="w-full border-[1px] rounded-lg border-blue-400 p-4 flex text-blue-500 text-4xl space-x-8 justify-center">
                  <CarryOutOutlined className="mt-3" />
                  <div className="text-2xl text-black">
                    <p>
                      Your package has been received and ready to be handed over
                      to your shipping order.
                    </p>
                    <p className="text-gray-500">Expected delivery April 21</p>
                  </div>
                  <RightOutlined className="text-xl text-gray-600 mt-4" />
                </div>
                <div className="text-xl space-y-1 tracking-wider mt-3">
                  <div className="flex space-x-3">
                    <p className="font-semibold tracking-wider">Customer Name: </p>
                    <p className="text-gray-700">{order.customerName}</p>
                  </div>

                  <div className="flex space-x-3">
                    <p className="font-semibold tracking-wider">Address: </p>
                    <p className="text-gray-700">{order.address}</p>
                  </div>

                  <div className="flex space-x-3">
                    <p className="font-semibold tracking-wider">Phone Number: </p>
                    <p className="text-gray-700">{order.phoneNumber}</p>
                  </div>

                  <div className="flex space-x-3">
                    <p className="font-semibold tracking-wider">Email: </p>
                    <p className="text-gray-700">{order.email}</p>
                  </div>
                </div>
              </>
            }
            key={order.id}
            className=""
          >
            {order?.products?.map((product) => (
              <ProductItem product={product} />
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default OrderDetail;
