import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
