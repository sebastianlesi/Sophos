import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './Pages/Slide/loginSlice';

export default configureStore({
  reducer: {
    login: loginSlice
  },
});
