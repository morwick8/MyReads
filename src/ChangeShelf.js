import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import {default as onUpdateBook} from './MyReadsPage'
import * as BooksAPI from './BooksAPI'

class ChangeShelf extends React.Component {

static propTypes = {
  book: PropTypes.object.isRequired,
   shelf: PropTypes.string.isRequired
 }

state =
{ 
}

UpdateBook(book, shelf) {
  BooksAPI.update(book, shelf)
}
  

render() {
  return (
  	<div className="book-shelf-changer">
     	<select value={this.props.book.shelf}
    		onChange={(e) => this.UpdateBook(this.props.book, e.target.value)}>
				<option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
        </select>
	</div>
     )
  }
}


export default ChangeShelf
