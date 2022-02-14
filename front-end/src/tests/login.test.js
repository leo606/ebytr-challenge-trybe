import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

test('renders login form', () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput).toBeInTheDocument();

  const btnSubmit = screen.getByRole('button');
  expect(btnSubmit).toHaveTextContent("Entrar");
});
