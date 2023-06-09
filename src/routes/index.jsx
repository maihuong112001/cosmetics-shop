import DefaultLayout from "@/layouts/DefaultLayout";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import MyAccount from "@/pages/MyAccount";
import Wishlist from "@/pages/Wishlist";
import Checkout from "@/pages/Checkout";
import Cart from "@/pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import GuardRoute from "./GuardRoute";
import { useEffect } from "react";
import supabase from "@/services/supabase";
import { fetchCartData } from "@/services/supabase/resource/cart.service";
import { setCart } from "@/store/slices/cart.slice";
import { setUser } from "@/store/slices/user.slice";
import OrderSuccess from "@/pages/OrderSuccess";
import Transactions from "@/pages/Transactions";
import OrderHistory from "@/pages/OderHistory";

export const RoutesConfig = ({
  wishlist,
  productList,
  addtoWishlist,
  wishlistt,
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((st) => st.user);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // setSession(session)
      dispatch(setUser(session?.user || undefined));
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // setSession(session)
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchCartData(user);
      dispatch(setCart(products));
    };
    fetchData();
    return () => {};
  }, [dispatch, user]);


  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          index
          element={
            <Home
              wishlist={wishlist}
              productList={productList}
              addtoWishlist={addtoWishlist}
            />
          }
        />
        <Route path="/wishlist" element={<Wishlist wishlistt={wishlistt} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/" element={<GuardRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/orderSuccess" element={<OrderSuccess />} />
          <Route path="/orderDetail" element={<Transactions />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
        </Route>
      </Route>
      <Route path="/checkouts" element={<Checkout />} />
    </Routes>
  );
};
