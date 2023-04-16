import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state,action) => {
      const item = state.items.find(item => item.product.id === action.payload.id)
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({product:action.payload, quantity: 1});
      }
    
    },
    setCart: (state,action) => {
      state.items  = action.payload
    },
    deleteProductCart:(state,action)=>{
      const productId=action.payload
      state.items=state.items.filter(item=> item.id !== productId)
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
