import { createSlice } from "@reduxjs/toolkit";

const initialState = {
          wishlists: [],
          quantity: 0,
}

const wishlist = createSlice({
          name: "addWishlist",
          initialState,
          reducers: {
                    AddWishlist: (state, action) => {
                              state.wishlists.push(action.payload)
                    }
          }
})

export const {AddWishlist} = wishlist.actions;
export default wishlist.reducer;