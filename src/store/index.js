import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./slices/user.slice";
import cartsReducer from "./slices/cart.slice";
import AddWishlist from "./slices/wishlist.slice";
import addCompare from "./slices/compare.slice";
import orderReducer from "./slices/order.slice";
import orderDetailReducer from "./slices/oderDetail.slice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
    wishlist: AddWishlist,
    carts: cartsReducer,
    compare: addCompare,
    order: orderReducer,
    orderDetail:orderDetailReducer,
  },
});
