import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddBookModal from './components/AddBookModal/AddBookModal';
import BookItem from './components/BookItem/BookItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import bookData from './bookData';
import './App.css';

export const BOOK_DATA = 'book-wishlist-data';

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            gridSwitch: true,
            bookData : {
                one: {
                    title: 'The Great Gatsby',
                    author: 'F. Scott Fitzgerald',
                    summary: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. Many literary critics consider The Great Gatsby to be one of the greatest novels ever written.',
                    category: 'Classic'
                },
                two: {
                    title: 'To Kill a Mockingbird',
                    author: 'Harper Lee',
                    summary: 'To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.',
                    category: 'Classic'
                }
            },
            modalOpen: false
        };
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

    // generateBookList = () => {
    //     const {bookData, gridSwitch} = this.state;
    //
    //     if (Object.keys(bookData).length === 0) {
    //         return <p>{'There are currrently no books in your list. Please add a book.'}</p>
    //     }
    //
    //     Object.keys(bookData).map((book, index) => {
    //         return (
    //             <Grid key={index} item xs={4}>
    //                 <BookItem gridLayout={gridSwitch} title={bookData[book].title}/>
    //             </Grid>
    //         );
    //     });
    // }

    render () {
        const {bookData, gridSwitch, modalOpen} = this.state;

        let generateBookList = Object.keys(this.state.bookData).map((book, index) => {
            return (
                <Grid key={index} item xs={4}>
                    <BookItem gridLayout={gridSwitch} title={bookData[book].title}/>
                </Grid>
            );
        });

        // const bookList = this.generateBookList();

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
                <div style={{ paddingTop: 20 }}>
                  <Grid container direction={gridSwitch ? 'row' : 'column'} spacing={3}>
                    {generateBookList}
                  </Grid>
                </div>
            </div>
        );
    }
}

export default App;
