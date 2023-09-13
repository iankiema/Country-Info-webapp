import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import microphone from '../assets/microphone-solid.svg'
import settings from '../assets/gear-solid.svg'
import back from '../assets/angle-left-solid.svg'

function CountryDetailsPage() {
  const { code } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'IWrsocgunOOPSPX1lY4wpg==tgIScuaOsYNEJMj8';
    const apiUrl = `https://api.api-ninjas.com/v1/country?name=${code}`;

    axios
      .get(apiUrl, {
        headers: {
          'X-Api-Key': apiKey,
        },
      })
      .then((response) => {
        setCountryData(response.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [code]);

  if (loading) {
    return <div className='load-div'><h2>Loading...</h2></div>;
  }

  if (error || !countryData) {
    return <div>Error: {error ? error.message : 'Country not found'}</div>;
  }

  return (
    <div>
       <div className='country-header'>
        <Link to="/"><img src={back} className='back-icon' /></Link>
        <h1>Country Details</h1>
        <div>
          <img className='icon' src={microphone} />
          <img className='icon' src={settings} />
        </div>
      </div>
      <div>

      </div>
          <div className='details-header'>
            <h2>{countryData.name} Details</h2>
          </div>
        <div className='details-div'>
          <div className='details-par'>
            <p>Country Code: <span>{countryData.iso2}</span></p>
          </div>
          <div className='details-par'>
            <p>Capital: <span>{countryData.capital}</span></p>
          </div>
          <div className='details-par'>
            <p>Region: <span>{countryData.region}</span></p>
          </div>
          <div className='details-par'>
            <p>Area Size: <span>{countryData.surface_area}</span></p>
          </div>
          <div className='details-par'>
            <p>Population: <span>{countryData.population}</span> </p>
          </div>
          <div className='details-par'>
            <p>Currency: <span>{countryData.currency.name}</span></p>
          </div>
          <div className='details-par'>
            <p>Infant Motality: <span>{countryData.infant_mortality}</span></p>
          </div>
          <div className='details-par'>
            <p>Internet Users: <span>{countryData.internet_users}</span></p>
          </div>
      </div>

    </div>
  );
}

export default CountryDetailsPage;
