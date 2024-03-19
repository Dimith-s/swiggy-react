import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        item: [],
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload)
        },
        removeitem:(state)=>{
            state.item.pop()
        },
        clearcart:(state)=>{
            state.item.length = 0
        },
    }
})

export const{addItem,removeitem,clearcart} = cartSlice.actions

export default cartSlice.reducer