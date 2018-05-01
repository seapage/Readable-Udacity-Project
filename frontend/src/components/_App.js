import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getCategory } from '../actions/categoryAction.js';
import Nowy from '../components/testComponent.js';
class App extends Component {
  

  state = {
  	categories: []
  }
  
  componentDidMount() {
    
    /*
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });*/
  }

  render() {
    return (
      <div className="App">
      hello world
       
       <button onClick={
       ()=>{
  
    console.log(this.props.tester())
    //console.log(this.props)
  }
       }>Kliknij</button>
    <Nowy />
<h1>
{this.props.liczba}
</h1>
<ul>
    {this.state.categories.map((category)=>(
    	<li key={category}>
			{category}
        </li>
    ))}
    </ul>
      </div>
    );
  }



}

const mapStateToProps = (state)=>{
  console.log(state)
  return ({
    	categories: state.categories.listOfCategory,
    	liczba: state.categories.inne
    })};
const mapDispatchToProps = (dispatch) => {
  return{
  	tester: () => dispatch(getCategory())
  }
}
//

export default connect(mapStateToProps,mapDispatchToProps)(App);
