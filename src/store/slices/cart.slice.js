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
      state.products  = action.payload
    },
    deleteProductCart:(state,action)=>{
      const productId=action.payload
      state.products=state.products.filter(product=> product.id !== productId)
    },
  },
});

// Reducer
const cartsReducer = cartSlice.reducer;

// Selector
export const cartsSelector = (state) => state.cartsReducer.allCarts;

// Action export
export const { addCart, setCart, deleteProductCart} = cartSlice.actions;

// Export reducer
export default cartsReducer;
