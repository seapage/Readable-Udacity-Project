import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {addPost} from '../actions/addPost.js';


class PostForm extends Component {
  
  
state={
    		form : {
										title:  "",
										body: "",
										owner: "",
										category: "",
										id: ""								
									}
}

editTitle(evt){
  this.setState({
		...this.state,
  		form: {
			...this.state.form,
  			title: evt.target.value
		}
	})
}  
editBody(evt){
  this.setState({
		...this.state,
  		form: {
			...this.state.form,
  			body: evt.target.value
		}
	})
}  
editOwner(evt){
  this.setState({
		...this.state,
  		form: {
			...this.state.form,
  			owner: evt.target.value
		}
	})
}  
editCategory(evt){
  this.setState({
		...this.state,
  		form: {
			...this.state.form,
  			category: evt.target.value
		}
	})
}  

 render(){
  			return (
   			<div>
              <h1 id="header">
                Add post
              	
              </h1>
              <div>
  <div className="form-group">
    <label>Title</label>
    <input  type="text" className="form-control" name="title" onChange={(evt)=>(this.editTitle(evt))}/>
  </div>
  <div className="form-group">
    <label>Body</label>
    <textarea type="text" className="form-control" name="body" onChange={(evt)=>(this.editBody(evt))}></textarea>
  </div>
  <div className="form-group">
    <label>Owner</label>
    <input type="text" className="form-control" name="owner" onChange={(evt)=>(this.editOwner(evt))}/>
  </div>
  <div className="form-group">
    <label>Category</label>
    <select value={this.state.form.category}  type="text" className="form-control" name="title" onChange={(evt)=>(this.editCategory(evt))}>
				<option>Select category</option>
              {this.props.categories.map((key)=>(
              	<option key={key.name} value={key.name}>{key.name}</option>
				))}     
    </select>
  </div>
    <input  type="hidden" className="form-control" name="idArticle"/>
  <button className="btn btn-primary" onClick={()=>{
    	this.props.sendPost(this.state.form);
        this.props.history.push('/');
    }}>Submit</button>
                </div>
              </div>
              );
  }
  
}

const mapStateToProps = (state, ownProps)=>{
  return ({
            categories: state.categories.categories || []
  });
};

const mapDispatchToProps = (dispatch, actualProps) => {
  return{
    
    sendPost: (form)=>dispatch(addPost(form))
    
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));