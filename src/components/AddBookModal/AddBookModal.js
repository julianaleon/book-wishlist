import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import categories from '../../categories';
import './AddBookModal.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    }
}));

function AddBookModal(props) {
    const [category, setCategory] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [summary, setSummary] = React.useState('');

    const classes = useStyles();
    const {localStorageKey} = props;

    const handleAddBook = () =>  {
        const key = title.toLowerCase().split(' ').join('');

        // Add the new book to any existing book data
        let existingData = JSON.parse(window.localStorage.getItem(localStorageKey));

        existingData[key] = {
            title: title,
            author: author,
            summary: summary,
            category: category
        };

        window.localStorage.setItem(
            localStorageKey,
            JSON.stringify(existingData)
        );

        // Clear form fields for next use
        setTitle('');
        setAuthor('');
        setCategory('');
        setSummary('');

        // Close modal
        props.handleClose();
    }

    const body = (
        <div className={'AddBookModal-body'}>
            <h3 id="simple-modal-title">Add a book to your wishlist</h3>
            <form className={classes.root}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        onChange={event => setTitle(event.target.value)}
                        value={title}
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Author"
                        onChange={event => setAuthor(event.target.value)}
                        value={author}
                        variant="outlined"
                    />
                </div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Category"
                  value={category}
                  onChange={event => setCategory(event.target.value)}
                  variant="outlined"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="outlined-multiline-static"
                  label="Summary"
                  multiline
                  rows={4}
                  onChange={event => setSummary(event.target.value)}
                  placeholder="What is this book about?"
                  value={summary}
                  variant="outlined"
                />
            </form>
            <Button className={'AddBookModal-button'} type="submit" variant="contained" color="primary" onClick={handleAddBook}>
                {'Add Book'}
            </Button>
        </div>
    );

    return (
        <Modal
            className={classes.modal}
            open={props.isOpen}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <h2 id="modal-title">
                {body}
            </h2>
        </Modal>
    );
}

AddBookModal.propTypes = {
    /** Flag to specify if the modal is open or closed. */
    isOpen: PropTypes.bool,
    /** Callback function that toggles the state of the modal to closed. */
    handleClose: PropTypes.func,
    /** Key of the object in local storage holding the book data. */
    localStorageKey: PropTypes.string
};

export default AddBookModal;
