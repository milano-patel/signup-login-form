import { createSlice } from '@reduxjs/toolkit';

document.cookie = 'users=[]';

let initialState;

const getCookieData = () => {
  let usersData = document.cookie
    .split(';')
    .map((cookie) => cookie.split('='))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key.trim()]: decodeURIComponent(value),
      }),
      {}
    );
  initialState = JSON.parse(usersData.users);
};
getCookieData();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      document.cookie = `users = ${JSON.stringify(state)}`;
    },
    deleteUser: (state, action) => {
      let newState = state.filter(
        (user) => user.email !== action.payload.email
      );
      document.cookie = `users = ${JSON.stringify(newState)}`;
      return newState;
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
