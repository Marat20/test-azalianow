import { createSlice } from '@reduxjs/toolkit';

const initialState: number[] = [];

const favouriteSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFav(state, action) {
      state.push(action.payload);
    },
    removeFav(state, action) {
      return state.filter((fav) => fav !== action.payload);
    },
  },
});

export const { addFav, removeFav } = favouriteSlice.actions;
export default favouriteSlice.reducer;
