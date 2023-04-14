import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user.slice";
import AddWishlist from "./slices/wishlist.slice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
    addWishlist: AddWishlist,
  },
});
