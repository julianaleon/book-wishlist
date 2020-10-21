import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import './BookItem.css';

function BookItem(props) {
    const {title} = props;

    const handleClick = () => {
        props.showDetails(title);
    }
    const handleRemove = () => {
        props.removeBook(title);
    }

    return (
        <div className={"BookItem"}>
            <div>
                <img className={"BookItem-icon"} alt={"Book icon"} src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg"/>
                <IconButton aria-label="Remove book from wishlist" className="BookItem-button--remove" onClick={handleRemove}>
                    <CloseIcon color="primary"/>
                </IconButton>
            </div>
            <p>{title}</p>
            <Button className="BookItem-button--view" variant="contained" color="primary" onClick={handleClick}>
                View Details
            </Button>
        </div>
    );
}

BookItem.propTypes = {
    /** Callback function to open the details page for a specific book. */
    showDetails: PropTypes.func,
    /** Callback function to remove a book from the wishlist. */
    removeBook: PropTypes.func,
    /** Title of the book. */
    title: PropTypes.string
};

BookItem.defaultProps = {
    showDetails: () => {},
    removeBook: () => {},
    title: "Title"
};

export default BookItem;
