import React from 'react';
import { render } from '@testing-library/react';
import AddBookModal from './AddBookModal';

describe('<AddBookModal />', () => {

    it('renders AddBookModal', () => {
        const { container, queryByRole } = render(<AddBookModal isOpen localStorageKey="book-wishlist-data"/>);
        expect(queryByRole('modal')).toBeDefined();
        expect(container.querySelector('.AddBookModal-body')).toBeDefined();
    });

    // it('Clicking Add Book button adds the new book to the existing data in local storage', () => {
    //
    // });

    // it('Adding text to the title input field updates the title state', () => {
    //
    // });

    // it('Adding text to the author input field updates the author state', () => {
    //
    // });
});
