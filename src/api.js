import axios from 'axios';

const fetchAllCountries = async (numberOfCountries = 1000) => {
  try {
    const response = await axios.get(`https://api.api-ninjas.com/v1/country?limit=${numberOfCountries}`, {
      headers: {
        'X-Api-Key': 'IWrsocgunOOPSPX1lY4wpg==tgIScuaOsYNEJMj8'
      },
    });
    return response.data;

  } catch (error) {
    throw error;
  }
};

export default fetchAllCountries;
