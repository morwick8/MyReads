import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'
//import sortBy from 'sort-by'

class ShowBook extends React.Component {

 static propTypes = {
   book: PropTypes.object.isRequired,
}

state = {

}
render() {
  return (
     	<li key={this.props.book.id}>
  		  <div className="book">
			<div className="book-top">
    			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:(`url(${this.props.book.imageLinks.thumbnail})`) }}></div>
				<ChangeShelf book={this.props.book}/>
				<div className="book-title">{this.props.book.title}</div>
        		<div className="book-authors">{this.props.book.authors}</div>
			</div>
		  </div>
        </li>
  )
}
}

export default ShowBook
