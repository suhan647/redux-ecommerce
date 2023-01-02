import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 3,
    quantity: "count"
}

export const quantitySlice = createSlice({
    name:'quantity',
    initialState,
    reducers: {
         
        increment: (state) => {
            state.count  += 1
        },

        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const {increment,decrement} = quantitySlice.actions
export default quantitySlice.reducer