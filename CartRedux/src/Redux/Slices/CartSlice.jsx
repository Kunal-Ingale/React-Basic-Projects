import { createSlice, createSelector } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "Cart",
    initialState:[],
    reducers:{
        addItem : (state,action)=>{
           state.push(action.payload)
        }
    }

})

export const {addItem} = cartSlice.actions

export const getSelector = createSelector(
(state) => state.cart,
                       // This is an input selector function that takes the  entire Redux state and returns the cart slice of the state. The input selector is responsible for extracting a specific part of the state.
(state) => state
                  //(cart) => cart: This is an output selector function that takes the result of the input selector (in this case, the cart slice) and returns it directly. The output selector can perform calculations or transformations on the input selector's result, but here it simply returns the cart as is.
)

export default cartSlice.reducer