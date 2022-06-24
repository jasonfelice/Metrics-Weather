import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import City from '../components/City';

describe('City component test', () => {
  it('Renders City', () => {
    const city = renderer
      .create(
        <Provider store={store}>
          <City title="New York" lat="50" long="50" />
        </Provider>,
      )
      .toJSON();
    expect(city).toMatchSnapshot();
  });
});
