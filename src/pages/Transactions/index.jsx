import OrderDetail from "@/components/OrderDetail";
import { fetchOrderDetailData } from "@/services/supabase/resource/orderDetail";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Transactions = () => {
  //   const { orderDetails } = useSelector((st) => st.orderDetail);
  const [orders, setOrders] = useState(undefined);
  const { user } = useSelector((st) => st.user);

  const fetchData = useCallback(async () => {
    const orders = await fetchOrderDetailData(user);
    setOrders(orders);
    console.log(orders);
  }, [user]);

  useEffect(() => {
    fetchData();
    return () => {};
  }, [fetchData]);

  if (!orders) {
    return <>Loading ....</>;
  }
  return (
    <div>
      <OrderDetail orders={orders} />
    </div>
  );
};

export default Transactions;
