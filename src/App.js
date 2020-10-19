import React, {Component} from 'react';
import AddBookModal from './components/AddBookModal/AddBookModal';
import BookDetails from './components/BookDetails/BookDetails';
import BookItem from './components/BookItem/BookItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import bookData from './bookData';
import './App.css';

export const BOOK_DATA = 'book-wishlist-data';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            gridSwitch: true,
            modalOpen: false,
            noData: false,
            showBookDetails: false,
            shownTitle: ''
        };

        // Pre-add some example books to local storage for demo purposes
        window.localStorage.setItem(
            BOOK_DATA,
            JSON.stringify(bookData)
        );
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    toggleSwitch = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    closeDetails = () => {
        this.setState({
            showBookDetails: false,
            shownTitle: ''
        })
    }

    showDetails = (title) => {
        // this.setState({
        //     showBookDetails: true,
        //     shownTitle: title
        // })
    }

    render () {
        const {gridSwitch, modalOpen, showBookDetails, shownTitle} = this.state;
        const bookData = JSON.parse(window.localStorage.getItem(BOOK_DATA));
        let hasBookData = true;

        // Check if local storage contains any book data
        if (Object.keys(bookData).length === 0) {
            hasBookData = false;
        }

        let generateBookList = Object.keys(bookData).map((book, index) => {
            return (
                <Grid key={index} item xs={4}>
                    <BookItem gridLayout={gridSwitch} showDetails={this.showDetails} title={bookData[book].title}/>
                </Grid>
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="App-title">{'Book Wishlist'}</h3>
                    <Button
                       className={'App-add-button'}
                       color="primary"
                       onClick={this.openModal}
                       startIcon={<AddIcon />}
                       variant="contained"
                    >
                       {'Add Book'}
                    </Button>
                    <AddBookModal handleClose={this.closeModal} isOpen={modalOpen} />
                    <FormControlLabel className={'App-switch'} control={
                        <Switch
                            checked={gridSwitch}
                            color="primary"
                            name="gridSwitch"
                            onChange={this.toggleSwitch}
                        />
                    } label="Grid View" />
                </header>
                <div className={"App-body"}>
                    {!hasBookData &&
                        <p>{'Your wishlist is empty. Please add a book to your wishlist.'}</p>
                    }
                    {hasBookData && !showBookDetails &&
                        <Grid container direction={gridSwitch ? 'row' : 'column'} spacing={3}>
                        {generateBookList}
                        </Grid>
                    }
                    {showBookDetails &&
                        <BookDetails closeDetails={this.closeDetails} title={shownTitle} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
