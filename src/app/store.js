import { configureStore } from '@reduxjs/toolkit';
import mailSliceReducer from '../features/mailSlice';
import userSliceReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailSliceReducer,
    user: userSliceReducer,
  },
});
