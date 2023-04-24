import {
  CaretRightOutlined,
  CarryOutOutlined,
  CheckCircleTwoTone,
  RightOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import ProductItem from "./ProductItem";
import { useCallback } from "react";
import supabase from "@/services/supabase";
import { useNavigate } from "react-router-dom";
const { Panel } = Collapse;

function OrderDetail({ orders }) {
  const navigate = useNavigate();
  const handelReceivedItem = useCallback(
    async (order) => {
      try {
        const orderId = order.id;
        const { error } = await supabase
          .from("orderDetails")
          .delete()
          .eq("order_id", orderId);
        if (error) {
          throw new Error(error.message);
        } else {
          const { error } = await supabase
            .from("order")
            .delete()
            .eq("id", orderId);
          if (error) {
            console.log(error);
            return;
          } else {
            const { error } = await supabase
              .from("orderHistory")
              .insert({
                user_id: order.user_id,
                customerName: order.customerName,
                phoneNumber: order.phoneNumber,
                address: order.address,
                products: order.products,
                email: order.email,
              })
              .select();
            if (error) {
              console.log(error);
              return;
            } else {
              navigate("/orderHistory");
            }
          }
        }
      } catch (error) {
        alert(error);
      }
    },
    [navigate]
  );
  return (
    <div className="w-full mt-10 pt-96 pb-36">
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
      >
        {orders?.map((order, index) => (
          <Panel
            header={
              <div>
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
                <div className="flex justify-between">
                  <div className="text-xl space-y-1 tracking-wider mt-3">
                    <div className="flex space-x-3">
                      <p className="font-semibold tracking-wider">
                        Customer Name:{" "}
                      </p>
                      <p className="text-gray-700">{order.customerName}</p>
                    </div>

                    <div className="flex space-x-3">
                      <p className="font-semibold tracking-wider">Address: </p>
                      <p className="text-gray-700">{order.address}</p>
                    </div>

                    <div className="flex space-x-3">
                      <p className="font-semibold tracking-wider">
                        Phone Number:{" "}
                      </p>
                      <p className="text-gray-700">{order.phoneNumber}</p>
                    </div>

                    <div className="flex space-x-3">
                      <p className="font-semibold tracking-wider">Email: </p>
                      <p className="text-gray-700">{order.email}</p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      handelReceivedItem(order);
                    }}
                    className="text-center text-5xl border-[1px] border-transparent mr-28 mt-4 p-2 hover:border-[1px] hover:border-red-300 hover:rounded-lg hover:bg-red-300 hover:text-blue-700"
                  >
                    <CheckCircleTwoTone />
                    <p className="text-2xl mt-2">You have received the item</p>
                  </div>
                </div>
              </div>
            }
            key={index}
          >
            {order?.products?.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default OrderDetail;
