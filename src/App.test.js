import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
    it('renders App', () => {
      const {container} = render(<App />);

      expect(container.querySelector('.App')).toBeDefined();
    });

    it('Does not render any books if no local storage exists', () => {
        const {getByText} = render(<App />);
        expect(getByText(/Your wishlist is empty. Please add a book to your wishlist./i)).toBeInTheDocument();
    });

    // it('Renders BookItem components if book data exists in local storage', () => {

    // });

    // it('Renders BookDetails component when showDetails function is called', () => {

    // });

    // it('Grid layout is used by default', () => {

    // });

    // it('List layout is used when the switch is toggled', () => {

    // });

    // it('Clicking the Add Book button opens the AddBookModal', () => {

    // });
});
