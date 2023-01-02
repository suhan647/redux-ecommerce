import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/CartSlice'
import quantityReducer from './slices/QuantitySlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    quantity: quantityReducer,
  },
})
