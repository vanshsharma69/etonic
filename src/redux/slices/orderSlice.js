import { createSlice } from '@reduxjs/toolkit';

const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

const initialState = {
  list: savedOrders,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.list.push(action.payload);
      // Save to localStorage
      localStorage.setItem('orders', JSON.stringify(state.list));
    },
  },
});

export const { placeOrder } = orderSlice.actions;
export default orderSlice.reducer;
