import { configureStore } from '@reduxjs/toolkit';
import foo from './weather/weather';
import updateCountries from './countries/countries';
import updateCities from './cities/cities';

export default configureStore({
  reducer: {
    foo,
    updateCountries,
    updateCities,
  },
});
