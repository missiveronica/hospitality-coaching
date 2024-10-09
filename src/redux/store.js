import { configureStore } from '@reduxjs/toolkit';
import services from './servicesSlice';
import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    services: services,
    cart: cart
  },
})