import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        login: (state) => {
            state.isAuthenticated = true;
          },
          logout: (state) => {
            state.isAuthenticated = false;
            state.items = []; // Clear the cart when logging out
          },
    }
});

export const {add, remove,login, logout} = CartSlice.actions;
export default CartSlice.reducer;