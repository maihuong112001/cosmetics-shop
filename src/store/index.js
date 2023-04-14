import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user.slice";
import AddWishlist from "./wishlist";
import cartsReducer from "./slices/cart.slice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
    addWishlist: AddWishlist,
    cartsReducer,
  },
});
