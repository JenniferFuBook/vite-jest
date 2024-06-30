import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Vite and React logos', () => {
  render(<App />);

  const viteLogo = screen.getByAltText('Vite logo');
  const reactLogo = screen.getByAltText('React logo');

  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
});

test('increments count when button is clicked', () => {
  render(<App />);

  const countText = screen.getByText(/count is 0/i);
  const button = screen.getByRole('button');//screen.getByText(/count is 0/i).closest('button');

  fireEvent.click(button);

  expect(countText).toHaveTextContent(/count is 1/i);
});
