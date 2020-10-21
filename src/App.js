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

export const BOOK_DATA = "book-wishlist-data";

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            gridSwitch: true,
            modalOpen: false,
            noData: false,
            showBookDetails: false,
            shownTitle: ""
        };


        window.localStorage.setItem(
            BOOK_DATA,
            JSON.stringify({})  // Remove this line and uncomment the line below to pre-add some example books to local storage for demo purposes
            // JSON.stringify(bookData)
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
            shownTitle: ""
        })
    }

    showDetails = (title) => {
        this.setState({
            showBookDetails: true,
            shownTitle: title
        })
    }

    removeBook = (title) => {
        var bookData = JSON.parse(window.localStorage.getItem(BOOK_DATA));
        const bookKey = title.toLowerCase().split(" ").join("");
        delete bookData[bookKey];

        window.localStorage.setItem(
            BOOK_DATA,
            JSON.stringify(bookData)
        );

        // Re-render the app to pick up the changes to local storage that a book was removed
        // This isn't ideal, but is needed since we aren't storing the data in state or feeding it in via props
        this.forceUpdate();
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
                    <BookItem gridLayout={gridSwitch} showDetails={this.showDetails} removeBook={this.removeBook} title={bookData[book].title}/>
                </Grid>
            );
        });

        return (
            <div className="App">
                <header className="App-header">
                    <h3 className="App-title">{"Book Wishlist"}</h3>
                    <Button
                       className={"App-button--add"}
                       color="primary"
                       onClick={this.openModal}
                       startIcon={<AddIcon />}
                       variant="contained"
                    >
                       {"Add Book"}
                    </Button>
                    <AddBookModal handleClose={this.closeModal} isOpen={modalOpen} localStorageKey={BOOK_DATA} />
                    <FormControlLabel className={"App-switch"} control={
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
                        <p>{"Your wishlist is empty. Please add a book to your wishlist."}</p>
                    }
                    {hasBookData && !showBookDetails &&
                        <Grid alignItems={gridSwitch ? "flex-start": "center"} container direction={gridSwitch ? "row" : "column"} spacing={5}>
                        {generateBookList}
                        </Grid>
                    }
                    {showBookDetails &&
                        <BookDetails closeDetails={this.closeDetails} localStorageKey={BOOK_DATA} title={shownTitle} />
                    }
                </div>
            </div>
        );
    }
}

export default App;
