import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user.slice";

import cartsReducer from "./slices/cart.slice";

import AddWishlist from "./slices/wishlist.slice";
import cartsReducer from "./slices/cart.slice";


export const store = configureStore({
  reducer: {
    user: usersReducer,
    addWishlist: AddWishlist,
    cartsReducer,
  },
});
