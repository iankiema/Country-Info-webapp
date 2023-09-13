import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import fetchAllCountries from '../api';
import { fetchCountries, setLoading } from '../Reducer/countriesSlice';
import SearchBar from './SearchBar';
import microphone from '../assets/microphone-solid.svg'
import settings from '../assets/gear-solid.svg'
import forward from '../assets/circle-right-regular.svg'
import '../App.css'

function HomePage() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.loading);
  const error = useSelector((state) => state.countries.error);

  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    dispatch(setLoading(true));

    fetchAllCountries()
      .then((data) => {
        dispatch(fetchCountries(data));
        dispatch(setLoading(false));
        setFilteredCountries(data);
      })
      .catch((err) => {
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  const handleSearch = (query) => {
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filteredCountries);
  };

  if (loading) {
    return <div className='load-div'><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div className='error'>Error: {error.message}</div>;
  }

  return (
    <div className='country-div'>
      <div className='country-header'>
        <h1>List of Countries</h1>
        <SearchBar onSearch={handleSearch} />
        <div>
          <img className='icon' src={microphone} />
          <img className='icon' src={settings} />
        </div>
      </div>
      <div className="country-list">
        {filteredCountries.map((country) => (
          <div key={country.name} className="country-item">
            <Link to={`/country/${country.name}`} className="country-link-one">
              <img to={`/country/${country.name}`} className='forward-icon' src={forward} />
            </Link>
            <Link to={`/country/${country.name}`} className="country-link">
              {country.name}
            </Link>
            <p>{country.region}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
