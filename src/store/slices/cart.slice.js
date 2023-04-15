import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state,action) => {
      state.products  =[...state.products,action.payload]
    },
    setCart: (state,action) => {
      state.products  =action.payload
    },
  },
});

// Reducer
const cartsReducer = cartSlice.reducer;

// Selector
export const cartsSelector = (state) => state.cartsReducer.allCarts;

// Action export
export const { addCart, setCart} = cartSlice.actions;

// Export reducer
export default cartsReducer;
