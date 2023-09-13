// src/actions/countryActions.js
import { fetchCountryData } from '../api'; // Update the API function

export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export const fetchCountryRequest = () => ({
  type: FETCH_COUNTRY_REQUEST,
});

export const fetchCountrySuccess = (data) => ({
  type: FETCH_COUNTRY_SUCCESS,
  payload: data,
});

export const fetchCountryFailure = (error) => ({
  type: FETCH_COUNTRY_FAILURE,
  payload: error,
});

// Modify the fetchCountry action to fetch all countries
export const fetchAllCountries = () => async (dispatch) => {
  dispatch(fetchCountryRequest());
  try {
    const data = await fetchCountryData(); // Update the API function call
    dispatch(fetchCountrySuccess(data));
  } catch (error) {
    dispatch(fetchCountryFailure(error));
  }
};
