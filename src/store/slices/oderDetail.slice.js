import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: undefined,
};

const orderDetailSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    setOrderDetail: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

// Reducer
const orderDetailReducer = orderDetailSlice.reducer;

// Selector
export const orderDetailSelector = (state) => state.orderDetailReducer.allOrderDetail;

// Action export
export const { setOrderDetail } = orderDetailSlice.actions;

// Export reducer
export default orderDetailReducer;
