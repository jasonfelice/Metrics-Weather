import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Create header', () => {
  it('Render without errors', () => {
    const tree = renderer
      .create(
        <Router>
          <Header heading="test" previous="" />
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders the elements', () => {
    render(
      <Router>
        <Header heading="test" previous="" />
      </Router>,
    );
    const element = screen.getByText('test');
    expect(element).toBeInTheDocument();
  });
});
