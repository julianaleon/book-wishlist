import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './BookItem.css';

function BookItem(props) {
  return (
      <div className={'BookItem'}>
        {props.gridLayout &&
            <img className={'BookItem-icon'} alt={'Book icon'} src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg"/>
        }
        <p>{props.title}</p>
        <Button variant="contained" color="primary" onClick={props.showDetails(props.title)}>
            View Details
        </Button>
      </div>
  );
}

BookItem.propTypes = {
    /** Flag to specify whether the layout is in grid or list view. */
    gridLayout: PropTypes.bool,
    /** Callback function to open the details page for a specific book. */
    showDetails: PropTypes.func,
    /** Title of the book. */
    title: PropTypes.string
};

BookItem.defaultProps = {
    gridLayout: true,
    showDetails: () => {},
    title: 'Title'
};

export default BookItem;
