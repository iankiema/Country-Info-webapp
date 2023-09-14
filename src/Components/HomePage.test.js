import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import '@testing-library/jest-dom';

function renderWithMemoryRouter(ui, { route = '/' } = {}) {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    ),
  };
}

const mockStore = configureStore([]);

describe('HomePage Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [],
        loading: false,
        error: null,
      },
    });
  });

  it('renders country name and region', async () => {
    const countriesData = [
      { name: 'Country 1', region: 'Region 1' },
      { name: 'Country 2', region: 'Region 2' },
    ];

    store = mockStore({
      countries: {
        countries: countriesData,
        loading: false,
        error: null,
      },
    });

    renderWithMemoryRouter(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText('Country 1')).toBeInTheDocument();
      expect(screen.getByText('Region 1')).toBeInTheDocument();
      expect(screen.getByText('Country 2')).toBeInTheDocument();
      expect(screen.getByText('Region 2')).toBeInTheDocument();
    });
  });

  it('renders loading spinner while fetching data', async () => {
    store = mockStore({
      countries: {
        countries: [],
        loading: true,
        error: null,
      },
    });

    renderWithMemoryRouter(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const loadingSpinner = await screen.findByTestId('loading-spinner');

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('renders error message when data fetching fails', async () => {
    store = mockStore({
      countries: {
        countries: [],
        loading: false,
        error: {
          message: 'Failed to fetch data',
        },
      },
    });

    renderWithMemoryRouter(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    const errorMessage = 'Error: Failed to fetch data';
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });
});
