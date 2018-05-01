import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getCategory } from '../actions/categoryAction.js';
class Nowy extends Component {
   render() {
    return (
    	<div>
      tuytaj
{this.props.categories}
      		{console.log("sprawdzam obecnosc controller nizej")}
      		{console.log(this.props)}


tert werg wer
      </div>
    )
   }

}

const mapStateToProps = (state)=>({
            categories: state.inne
        });
    const mapDispatchToProps = (dispatch) => {
      return{
        tester: () => dispatch(getCategory())
      }
    }
export default connect(mapStateToProps)(Nowy);
//export default Nowy;