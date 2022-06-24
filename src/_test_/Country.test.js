import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Country from '../components/Country';

describe('Country component test', () => {
  it('Renders Country', () => {
    const country = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Country name="test" number={5} vector="null" cities={[]} />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(country).toMatchSnapshot();
  });
});
