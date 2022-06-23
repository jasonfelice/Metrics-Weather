import { configureStore } from '@reduxjs/toolkit';
import weather from './weather/weather';
import updateCountries from './countries/countries';
import updateCities from './cities/cities';

export default configureStore({
  reducer: {
    weather,
    updateCountries,
    updateCities,
  },
});
