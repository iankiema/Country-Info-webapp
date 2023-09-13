// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CountryDetailsPage from './Components/CountryDetailsPage';

function App() {
  return (

      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:code" element={<CountryDetailsPage />} />
          </Routes>
        </Router>
      </div>

  );
}

export default App;
