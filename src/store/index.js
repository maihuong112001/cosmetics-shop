import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user.slice";

import cartsReducer from "./slices/cart.slice";

import AddWishlist from "./slices/wishlist.slice";

import  addCompare  from "./slices/compare.slice";


export const store = configureStore({
  reducer: {
    user: usersReducer,
    wishlist: AddWishlist,
    carts:cartsReducer,
    compare: addCompare,
  },
});
