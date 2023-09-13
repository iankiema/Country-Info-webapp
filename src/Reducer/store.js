// store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../Reducer/countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
