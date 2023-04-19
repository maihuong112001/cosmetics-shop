import { createSlice } from "@reduxjs/toolkit";

const initialState = {
          wishlists: [],
          isWishlist: false,

}

const wishlist = createSlice({
          name: "wishlist",
          initialState,
          reducers: {
                    AddWishlist: (state, action) => { 
                              const temp = {...action.payload, isWishlist:true}
                              state.wishlists.push(temp);
          
                              
                    },
                    RemoveWishlist : (state, action) => {
                              
                              state.wishlists.pop(action.payload);
                    }
          }
})

export const {AddWishlist, RemoveWishlist} = wishlist.actions;
export default wishlist.reducer;