import { ICart } from '@/types/product.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICart[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
