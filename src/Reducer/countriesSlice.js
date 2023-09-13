// reducers/countriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  selectedCountry: null,
  loading: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    fetchCountries: (state, action) => {
      state.countries = action.payload;
    },
    selectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { fetchCountries, selectedCountry, setLoading } = countriesSlice.actions;

export default countriesSlice.reducer;
