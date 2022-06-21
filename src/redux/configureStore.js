import { configureStore } from '@reduxjs/toolkit';
import foo from './weather/weather';

export default configureStore({
  reducer: {
    foo,
  },
});
