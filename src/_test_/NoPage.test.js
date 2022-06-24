import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import NoPage from '../pages/NoPage';

describe('Create header', () => {
  it('Render without errors', () => {
    const tree = renderer
      .create(
        <Router>
          <NoPage />
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the elements', () => {
    render(
      <Router>
        <NoPage />
      </Router>,
    );
    const element = screen.getByText('Page not found!');
    expect(element).toBeInTheDocument();
  });
});
