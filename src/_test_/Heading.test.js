import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Heading from '../components/Heading';

describe('Heading component test', () => {
  it('Renders Heading', () => {
    const country = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Heading title="weather" />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(country).toMatchSnapshot();
  });
});
