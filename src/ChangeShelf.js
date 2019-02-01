import React from 'react'
import './App.css'
import PropTypes from 'prop-types'
import onUpdateBook from './MyReadsPage'

class ChangeShelf extends React.Component {

static propTypes = {
  book: PropTypes.object.isRequired,
 }

state =
{ shelf: ''
}



render() {
  return (
  	<div className="book-shelf-changer">
     	<select value={this.props.book.shelf}
    		onChange={(e) => onUpdateBook(this.props.book, e.target.value)}>
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
