import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './BookItem.css';

function showDetails (){
    
}

function BookItem(props) {
  return (
      <div className={'BookItem'}>
        {props.gridLayout &&
            <img className={'BookItem-icon'} alt={'Book icon'} src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg"/>
        }
        <p>{props.title}</p>
        <Button variant="contained" color="primary" onClick={showDetails}>
            View Details
        </Button>
      </div>
  );
}

BookItem.propTypes = {
    /** Title of the book. */
    title: PropTypes.string,
    details: PropTypes.string
};

BookItem.defaultProps = {
    title: 'Placeholder'
};

export default BookItem;
