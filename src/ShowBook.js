import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import ChangeShelf from './ChangeShelf'
//import sortBy from 'sort-by'

class ShowBook extends React.Component {

 static propTypes = {
  key: PropTypes.string.isRequired,
   book: PropTypes.object.isRequired,
   shelf: PropTypes.string.isRequired
}

state = {

}
render() {
  return (
   		  <div className="book">
			<div className="book-top">
    			<div className="book-cover" style={{ width: 128, height: 193, backgroundImage:(`url(${this.props.book.imageLinks.thumbnail})`) }}></div>
				<ChangeShelf book={this.props.book} shelf={this.props.shelf}/>
				<div className="book-title">{this.props.book.title}</div>
        		<div className="book-authors">{this.props.book.authors}</div>
			</div>
		  </div>
  )
}
}

export default ShowBook
