import { createSlice } from '@reduxjs/toolkit';

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    list: [],
    selectedAddressId: null,
  },
  reducers: {
    addAddress: (state, action) => {
      const id = Date.now().toString();
      state.list.push({ ...action.payload, id });
    },
    selectAddress: (state, action) => {
      state.selectedAddressId = action.payload;
    },
  },
});

export const { addAddress, selectAddress } = addressSlice.actions;
export default addressSlice.reducer;
