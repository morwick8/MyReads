import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListCurrentReads from './ListCurrentReads'
import Heading from './Heading'



class MyReadsPage extends React.Component {
  
     state = {
    	books: [],
       	shelf: '',
       shelfName: ''
   }
  
    
componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState( {books} )
  })
}

updateBook(book, shelf) {
  BooksAPI.update(book, shelf)
}
  
updateShelves() {
	BooksAPI.getAll().then((books) => {
   this.setState( {books} )
    })
}

componentDidUpdate() {
  BooksAPI.getAll().then((books) => {
    this.setState( {books} )
  })
}

  

  
  
  render() {
    return (



    <div className="app">
		<div className="list-books">
           			<div className="shelves">
   	        		<Heading/>
      				<ListCurrentReads 
    					books={this.state.books} 
						shelf="currentlyReading"
						shelfName="Currently Reading"
		        onUpdateBook={this.updateBook}
			/>
					<ListCurrentReads 
    					books={this.state.books} 
						shelf="wantToRead"
						shelfName="Want To Read"
						onUpdateBook={this.updateBook}
					/>
					<ListCurrentReads 
    					books={this.state.books} 
						shelf="read"
						shelfName="Read"
						onUpdateBook={this.updateBook}
					/>
<Link to={`/search`} className="open-search" >Search</Link>
				</div>
           </div>
       </div>
    )}
}
 

export default MyReadsPage
