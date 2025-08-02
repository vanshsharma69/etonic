// src/redux/slices/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // each item: {id, title, price, etc.}
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const item = action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
