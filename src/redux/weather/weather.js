import axios from 'axios';

const getWeather = (payload) => ({ type: 'GET_WEATHER', payload });
const initialState = {};
const url = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'bbb469513dcaac6028a1edaa06809cc5';

const fetchWeather = (cord) => async (dispatch) => {
  const res = await axios.get(`${url}lat=${cord.lat}&lon=${cord.long}&appid=${apiKey}`);
  dispatch(getWeather(res.data));
};

const weatherReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_WEATHER':
      return payload;
    default:
      return state;
  }
};

export default weatherReducer;
export { fetchWeather };
