const getCities = (payload) => ({ type: 'GET_CITIES', payload });
const initialState = [];

const updateCities = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CITIES':
      return action.payload;
    default:
      return state;
  }
};

export default updateCities;
export { getCities };
