// store/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../Reducer/countriesSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  middleware: [thunk]
});

export default store;
