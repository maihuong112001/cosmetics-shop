import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderHistory: undefined,
};

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState,
  reducers: {
    setOrderDetail: (state, action) => {
      state.orderHistory = action.payload;
    },
  },
});

// Reducer
const orderHistoryReducer = orderHistorySlice.reducer;

// Selector
export const orderHistorySelector = (state) => state.orderHistoryReducer.allOrderHistory;

// Action export
export const { setOrderHistory } = orderHistorySlice.actions;

// Export reducer
export default orderHistoryReducer;
