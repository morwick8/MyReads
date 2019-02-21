import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import ShowBook from './ShowBook'


class ListCurrentReads extends React.Component {

static propTypes = {
   books: PropTypes.array.isRequired,
   shelf: PropTypes.string.isRequired,
   shelfName: PropTypes.string.isRequired
}

state = {

}

render() {
	const books = this.props.books
  const shelf = this.props.shelf
  const shelfName = this.props.shelfName

  return (
 	  <div className="bookshelf">
    	<h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
				  <ol className="books-grid">
            {books.filter((book) => book.shelf === shelf)
  					 .map((book) => (
                <li className="books-grid" key={book.title}>
                  <ShowBook book={book} shelf={shelf} />                
                </li>
            ))}
					</ol>
        </div> 
    </div>
  )

}
}

export default ListCurrentReads
