import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import axios from 'axios';
import CountryDetailsPage from './CountryDetailsPage';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('CountryDetailsPage Component', () => {
  it('renders country details after successful data fetching', async () => {
    const mockData = {
      data: [
        {
          name: 'Country Name',
          iso2: 'ISO2',
          capital: 'Capital',
          region: 'Region',
          surface_area: 'Area',
          population: 'Population',
          currency: { name: 'Currency' },
          infant_mortality: 'Mortality',
          internet_users: 'Users',
        },
      ],
    };

    axios.get.mockResolvedValue(mockData);

    render(
      <MemoryRouter initialEntries={['/country/code']}>
        <Routes>
          <Route path="/country/:code" element={<CountryDetailsPage />} /> {/* Use element prop */}
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText('Country Details')).toBeInTheDocument();
    expect(screen.getByText('Country Name Details')).toBeInTheDocument();
  });
});
