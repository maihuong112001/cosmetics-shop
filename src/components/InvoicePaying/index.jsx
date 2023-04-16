import supabase from "@/services/supabase";
import { fetchCartData } from "@/services/supabase/resource/cart.service";
import { setCart } from "@/store/slices/cart.slice";
import { Badge } from "antd";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function InvoicePaying() {
  const { items } = useSelector((state) => state.carts);
  const carts = useSelector((state) => state.carts);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const totalPrice = useMemo(
    () =>
      carts.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0),
    [carts]
  );
  const totalOrder = totalPrice + 48.84;
  const handleDeleteCart = useCallback(
    async (product) => {
      try {
        const cartItems = carts.items.map((item) => ({
          product_id: item.product.id,
          quantity: item.quantity,
        }));
        const Items = cartItems.filter(
          (cartItem) => cartItem.product_id !== product.id
        );
        const { error } = await supabase
          .from("cart")
          .update({ items: Items })
          .eq("id_user", user?.id);
        if (error) {
          throw new Error(error.message);
        } else {
          dispatch(setCart(await fetchCartData(user)));
        }
      } catch (error) {
        alert(error);
      }
    },
    [carts.items, dispatch, user]
  );
  return (
    <div className="flow-root">
      <ul className="-my-6 divide-y divide-gray-200">
        {items.map(({ product, quantity }) => (
          <li key={product.id} className="flex py-6">
            <Badge count={quantity} size="default">
              <div className="h-[75px] w-[75px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={product.images}
                  alt="product"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </Badge>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between font-semibold text-[13px] tracking-wider text-gray-800">
                  <h3>
                    <Link to="/">{product.name}</Link>
                  </h3>
                  <p className="ml-4 mr-3">${product.price}</p>
                </div>
                <p className="mt-1 text-[13px] text-gray-500">
                  {product.color}
                </p>
              </div>
              <div className="flex flex-1 items-end justify-between text-[12px]">
                <p></p>
                <div className="flex">
                  <button
                    onClick={() => {
                      handleDeleteCart(product);
                    }}
                    type="button"
                    className="text-[12px] font-medium text-indigo-600 hover:text-indigo-500 mr-3"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-6">
        <p className="text-2xl">Subtotal </p>
        <p className="font-semibold text-2xl">${totalPrice}</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl">Shipping </p>
        <p className="text-lg text-gray-500">Calculated at next step</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl">Estimated taxes </p>
        <p className="font-semibold text-2xl">$48.84</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-2xl font-semibold">Total </p>
        <div className="flex">
          <p className="text-2xl text-gray-500 mr-2">USD</p>
          <p className="font-semibold text-2xl ml-2"> ${totalOrder}</p>
        </div>
      </div>
    </div>
  );
}

export default InvoicePaying;
