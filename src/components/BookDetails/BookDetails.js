import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './BookDetails.css';

function BookDetails(props) {
    // Retrieve book details from local storage
    const author = 'Harper Lee';
    const category = 'test';
    const summary = 'some other text goes here';

    return (
        <div className={'BookDetails'}>
            <Button className={'BookDetails-back-button'} color="primary" onClick={props.closeDetails} size="large">
                <ArrowBackIcon color="primary"/>
                Back
            </Button>
            <div className={'BookDetails-content'}>
            <img className={'BookItem-icon'} alt={'Book icon'} src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg"/>
                <h1>{props.title}</h1>
                <h2>{`By: ${author}`}</h2>
                <h3>{`Category: ${category}`}</h3>
                <p>{`${summary}`}</p>
            </div>
        </div>
    );
}

BookDetails.propTypes = {
    /** Callback function to close the details page. */
    closeDetails: PropTypes.func,
    /** Title of the book. */
    title: PropTypes.string
};

BookDetails.defaultProps = {
    closeDetails: () => {},
    title: 'Title'
};

export default BookDetails;
