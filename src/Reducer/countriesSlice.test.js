import { fetchCountries, selectedCountry, setLoading } from './countriesSlice';

describe('countriesSlice', () => {
  it('should create an action to fetch countries', () => {
    const countries = [{ name: 'Country 1' }, { name: 'Country 2' }];
    const expectedAction = {
      type: fetchCountries.type,
      payload: countries,
    };
    expect(fetchCountries(countries)).toEqual(expectedAction);
  });

  it('should create an action to set selected country', () => {
    const country = { name: 'Country 1' };
    const expectedAction = {
      type: selectedCountry.type,
      payload: country,
    };
    expect(selectedCountry(country)).toEqual(expectedAction);
  });

  it('should create an action to set loading state', () => {
    const isLoading = true;
    const expectedAction = {
      type: setLoading.type,
      payload: isLoading,
    };
    expect(setLoading(isLoading)).toEqual(expectedAction);
  });
});
