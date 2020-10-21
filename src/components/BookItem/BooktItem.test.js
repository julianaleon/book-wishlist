import React from 'react';
import { render } from '@testing-library/react';
import BookItem from './BookItem';

describe('<BookItem/>', () => {

    it('renders BookItem', () => {
      const { container } = render(<BookItem />);

      expect(container.querySelector('.BookItem')).toBeDefined();
      expect(container.querySelector('.BookItem-icon')).toBeDefined();
      expect(container.querySelector('.BookItem-button--remove')).toBeDefined();
      expect(container.querySelector('.BookItem-button--view')).toBeDefined();
    });

    // it('Clicking View Details button renders the BookDetails', () => {
    //
    // });

    // it('Clicking close icon button removes the book from local storage', () => {
    //
    // });
});
