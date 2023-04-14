import { createSlice } from "@reduxjs/toolkit";

const initialState = {
          wishlists: [],
          isWishlist: false,

}

const wishlist = createSlice({
          name: "addWishlist",
          initialState,
          reducers: {
                    AddWishlist: (state, action) => { 
                              const temp = {...action.payload, isWishlist:true}
                              state.wishlists.push(temp);
          
                              
                    },
          }
})

export const {AddWishlist} = wishlist.actions;
export default wishlist.reducer;