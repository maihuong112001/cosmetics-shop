import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orders = action.payload;
    },
  },
});

// Reducer
const orderReducer = orderSlice.reducer;

// Selector
export const orderSelector = (state) => state.orderReducer.allOrder;

// Action export
export const { setOrder } = orderSlice.actions;

// Export reducer
export default orderReducer;
