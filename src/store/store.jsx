import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import currentuserReducer from './currentuserSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    currentuser: currentuserReducer,
  },
});

export { store };
