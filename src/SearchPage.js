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
    if (query !== '') {
  		BooksAPI.search(query, 25).then(results => {
    		if (!results || results.error) {
              this.setState({searchedBooks: []})
			} else {
              this.setState({searchedBooks: results})
           }})
   	} else {
         this.setState({searchedBooks: this.props.books})                          
    }
    this.state.searchedBooks.map(searchedBook => {
    	var result = this.props.books.find(book => book.id === searchedBook.id)
		this.state.showingBooks.concat(result) 
      	return this.state.showingBooks
    })
}    

updateQuery = (query) => {
  this.setState( {query: query.trim()} )
  this.setState( {showingBooks: this.onSearch(query)} )

}
    
render() {
/*	the search box area
*	render all books that match search criteria
*   select/option box for readStatus - onChange of readStatus
 */
	const query = this.state.query


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
					{this.state.showingBooks.map(book => 
						<ShowBook book={book} key={book.id} />
					)}
				</ol>
			</div>
		</div>
	)
}
}
 
 export default SearchPage
