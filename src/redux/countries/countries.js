import countries from '../../data/countries';

const filterCountries = (value) => ({ type: 'Filter', value });
const initialState = countries;

const updateCountries = (state = initialState, action) => {
  switch (action.type) {
    case 'Filter':
      return initialState.filter((country) => country.region === action.value);
    default:
      return state;
  }
};

export default updateCountries;
export { filterCountries };
