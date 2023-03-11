import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const currentuserSlice = createSlice({
  name: 'currentuser',
  initialState,
  reducers: {
    addcurrentUser: (state, action) => {
      Object.assign(state, action.payload);
      //state[0] = action.payload;
      //state.splice(0, 1, action.payload);
    },
  },
});

export const { addcurrentUser } = currentuserSlice.actions;
export default currentuserSlice.reducer;
