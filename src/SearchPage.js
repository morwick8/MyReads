import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBook from './ShowBook'

class SearchPage extends React.Component { 

 //ropTypes = {
 //    books: PropTypes.array.isRequired,
 //
state= {
   query: '',
  	shelf: '',
  	books: [],
  	searchedBooks: [],
  	searchedBookIds: [],
   showingBooks: [],
   error: false
 }
  
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState( {books} )
  })
}

    

onSearch(query) {
   var searchedBooks = []
    if (query !== '') {
  		BooksAPI.search(query, 25).then(results => {
    		if (results.error) {
              searchedBooks = []
			 } else {
              searchedBooks = results
  	   }
       this.setState({searchedBooks})
       searchedBooks.map(searchedBook => 
          (this.state.books.filter((book) => book.id === searchedBook.id)
          .map(book => searchedBook.shelf = book.shelf)))
        
     })
    } else {
      this.setState({searchedBooks})
    }
    
}    

updateQuery = (query) => {
  this.setState( {query: query.trim()})
  this.onSearch(query)

}
    
render() {
/*	the search box area
*	render all books that match search criteria
*   select/option box for readStatus - onChange of readStatus
 */
	const query = this.state.query
  const books = this.state.books
  const shelf = this.state.shelf
  const shelfName = this.state.shelfName


/* eslint-disable */
//	

	return (

       <div className="search-books">
         <div className="search-books-bar">
            <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
				 <input 
      				className="search-field"
      				type="text" 
      				placeholder="Search by title or author" 
      				value={query}
					onChange={(event) => 
                      this.updateQuery(event.target.value)}
				 /> 
			  </div>
			</div>
			<div className="search-book-results">
        <ol className="books-grid">
          {this.state.searchedBooks.map((book) => (
            <li key={book.title}>
              <ShowBook book={book} shelf={shelf} />                
            </li>
          ))}
	
				</ol>
			</div>
		</div>
	)
}
}
 
 export default SearchPage
