import { configureStore } from '@reduxjs/toolkit';
import foo from './weather/weather';
import updateCountries from './countries/countries';

export default configureStore({
  reducer: {
    foo,
    updateCountries,
  },
});
