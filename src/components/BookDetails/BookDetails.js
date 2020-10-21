import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './BookDetails.css';

// Retrieve book details from local storage
function retrieveBook(title, key) {
    const bookKey = title.toLowerCase().split(" ").join("");
    let bookData = JSON.parse(window.localStorage.getItem(key));
    return bookData[bookKey];
}

function BookDetails(props) {
    const {title} = props;
    const book = retrieveBook(title, props.localStorageKey);
    const author = book.author ? book.author : "unknown";
    const category = book.category ? book.category : "unknown";

    return (
        <div className={"BookDetails"}>
            <Button className={"BookDetails-button--back"} color="primary" onClick={props.closeDetails} size="large">
                <ArrowBackIcon color="primary"/>
                Back
            </Button>
            <div className={"BookDetails-content"}>
                <img className={"BookItem-icon"} alt={"Book icon"} src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg"/>
                <h1>{title}</h1>
                <h2>{`By: ${author}`}</h2>
                <h3>{`Category: ${category}`}</h3>
                <p className={"BookDetails-summary"}>{`${book.summary}`}</p>
            </div>
        </div>
    );
}

BookDetails.propTypes = {
    /** Callback function to close the details page. */
    closeDetails: PropTypes.func,
    /** Key of the object in local storage holding the book data. */
    localStorageKey: PropTypes.string,
    /** Title of the book. */
    title: PropTypes.string
};

BookDetails.defaultProps = {
    closeDetails: () => {},
    title: "Title Unknown"
};

export default BookDetails;
