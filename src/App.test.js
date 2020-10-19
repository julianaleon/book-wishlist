import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App application', () => {
  const { container } = render(<App />);

  expect(container.querySelector('.App')).toBeDefined();
});
