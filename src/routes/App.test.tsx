import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('renders the home page on default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/🏠 Placeholder Homepage/i)).toBeInTheDocument();
});

test('renders the not found page for unknown routes', () => {
  render(
    <MemoryRouter initialEntries={['/random-route']}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});
