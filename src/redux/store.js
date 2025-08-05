// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import addressReducer from './slices/addressSlice';
import orderReducer from './slices/orderSlice';

const store = configureStore({
  reducer: {
    address: addressReducer,
    order: orderReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store; 
