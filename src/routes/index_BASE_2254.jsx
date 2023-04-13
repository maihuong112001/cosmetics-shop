import { setUser } from "@/store/slices/user.slice";
import DefaultLayout from "@/layouts/DefaultLayout";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import MyAccount from "@/pages/MyAccount";
import { useDispatch } from "react-redux";
import GuardRoute from "./GuardRoute";
import Cart from "@/pages/Card";
import { useEffect } from "react";
import supabase from "@/services/supabase";

export const RoutesConfig = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // setSession(session)
      console.log(session);
      dispatch(setUser(session?.user||undefined))
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      // setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<GuardRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<MyAccount />} />
        </Route>

      </Route>

      <Route path="/collection" element={<Collection />} />
      <Route path="/product" element={<Product />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/account/login" element={<Login />} />
    </Routes>
  );
};
