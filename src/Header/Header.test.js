import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText('To-Do List');
  expect(headerElement).toBeInTheDocument();
});
