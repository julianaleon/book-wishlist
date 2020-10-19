import React from 'react';
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

function addBook(event) {

}

function AddBookModal(props) {
    const [category, setCategory] = React.useState('Adventure');
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [summary, setSummary] = React.useState('');

    const classes = useStyles();

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    // const addBook = () => {
    //
    // }

    const body = (
        <div className={'AddBookModal-body'}>
            <h3 id="simple-modal-title">Add a book to your wishlist</h3>
            <form className={classes.root}>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Title"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Author"
                        variant="outlined"
                    />
                </div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Category"
                  value={category}
                  onChange={handleChange}
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
                  placeholder="What is this book about?"
                  variant="outlined"
                />
            </form>
            <Button type="submit" variant="contained" color="primary" onClick={addBook}>
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

export default AddBookModal;
