import { createSlice } from "@reduxjs/toolkit";

const initialState = {
          compares: [],
          isCompare: false,

}

const compare = createSlice({
          name: "compare",
          initialState,
          reducers: {
                    addCompare: (state, action) => { 
                              const temp = {...action.payload, isCompare:true}
                              state.compares.push(temp);
          
                              
                    },
                    removeCompare : (state, action) => {
                              
                              state.compares.pop(action.payload);
                    }
          }
})

export const {addCompare, removeCompare} = compare.actions;
export default compare.reducer;