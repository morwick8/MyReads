import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage'
import MyReadsPage from './MyReadsPage'




class App extends React.Component {
  
 
  render() {
    return (
      	<div>
 			<Route exact path="/" render={() => (
      			<MyReadsPage/>
      		)}/>
			<Route path="/search" render={() => (
            	<SearchPage/> 
       		)}/>                 
       	</div>
    )
  }
}

export default App

