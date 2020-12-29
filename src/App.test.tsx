import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Main from './Pages/Main';

test('renders learn react link', () => {
  render(<Main />);
  // const linkElement = screen.getByText(/sss/i);
  // expect(linkElement).toBeInTheDocument();
});
