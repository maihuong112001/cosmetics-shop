import { CaretRightOutlined } from "@ant-design/icons";
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
          <Panel header={<>
          address : {order.address}
          </>} key={order.id} className="">
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
