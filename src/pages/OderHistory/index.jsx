import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchOrderHistoryData } from "@/services/supabase/resource/orderHistory";
import { useCallback, useEffect, useState } from "react";

function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState(undefined);
  const { user } = useSelector((st) => st.user);
  const fetchData = useCallback(async () => {
    const orderHistory = await fetchOrderHistoryData(user);
    setOrderHistory(orderHistory);
  }, [user]);

  useEffect(() => {
    fetchData();
    return () => {};
  }, [fetchData]);
  if (!orderHistory) {
    <>Loading...</>;
  }
  const orderItems = orderHistory?.data;
  return (
    <div className="w-full pt-96 px-10">
      <div className="px-4 sm:px-0 text-center">
        <h3 className=" font-semibold text-3xl text-gray-900">
          History of your orders
        </h3>
        <p className="mt-1 text-xl text-gray-500">See details below</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        {orderItems?.map((orderItem) => (
          <dl key={orderItem.id} className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-xl font-semibold leading-6 text-black">
                Code Order:
              </dt>
              <dd className="mt-1 tracking-wider text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {orderItem.id}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-xl font-semibold leading-6 text-black">
                Name Customer:
              </dt>
              <dd className="mt-1 tracking-wider text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {orderItem.customerName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-xl font-semibold leading-6 text-black">
                Phone Number:
              </dt>
              <dd className="mt-1 tracking-wider text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {orderItem.phoneNumber}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-xl font-semibold leading-6 text-black">
                Address:
              </dt>
              <dd className="mt-1 tracking-wider text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {orderItem.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-xl font-semibold leading-6 text-black">
                SubTotal:
              </dt>
              <dd className="mt-1 tracking-wider text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                $120,000
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-xl font-semibold leading-6 text-black">
                Products:
              </dt>
              <dd className="mt-2 text-xl text-gray-900 sm:col-span-2 sm:mt-0">
                <ul className="py-4 grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 rounded-md border border-gray-200">
                  {orderItem?.products?.map((product) => (
                    <li
                      key={product.id}
                      className="pl-4 pr-5 text-xl leading-6 "
                    >
                      <div className="flex w-full">
                        <div className="h-[75px] w-[75px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.image}
                            alt="product"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col text-gray-600 font-sans space-y-1">
                          <h3 className="font-semibold tracking-wider text-black">
                            <Link to="/">{product.name}</Link>
                          </h3>
                          <div className="flex space-x-3">
                            <p className="font-semibold text-black">Price: </p>
                            <p>{product.price}$</p>
                          </div>
                          <div className="flex space-x-3">
                            <p className="font-semibold text-black">Color: </p>
                            <p>white</p>
                          </div>
                          <div className="flex space-x-3">
                            <p className="font-semibold text-black">
                              Quantity:{" "}
                            </p>
                            <p>{product.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
