import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('SearchBar handles input change correctly', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const inputElement = getByPlaceholderText('Search for a country...');

  fireEvent.change(inputElement, { target: { value: 'Test' } });

  expect(inputElement.value).toBe('Test');
});

test('SearchBar calls onSearch when the search button is clicked', () => {
  const mockOnSearch = jest.fn();
  const { getByText } = render(<SearchBar onSearch={mockOnSearch} />);
  const searchButton = getByText('Search');

  fireEvent.click(searchButton);

  expect(mockOnSearch).toHaveBeenCalled();
});
