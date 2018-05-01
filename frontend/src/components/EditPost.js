import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getPost} from '../actions/postLoad.js';
import {editPost} from '../actions/editPost.js';


class EditForm extends Component {
  
  construct = ()=>{
  }
  
state={
	title: "",
	body: ""
}
componentDidMount(){
  this.setState({
		title: this.props.title || "",
  		body: this.props.body || ""
	})
}

componentWillReceiveProps(nextProps){
  this.setState({
		title: nextProps.title,
  		body: nextProps.body
	})
}
editTitle(evt){
  this.setState({
		...this.state,
  		title: evt.target.value
	})
}  
editBody(evt){
  this.setState({
		...this.state,
  		body: evt.target.value
	})
}  


 render(){
  			return (
   			<div>
              <h1 id="header">
                Edit post
              	
              </h1>
              <div>
             
  <div className="form-group">
    <label>Title</label>
    <input value={this.state.title}  type="text"  className="form-control" name="title" onChange={(evt)=>(this.editTitle(evt))}/>
  </div>
  <div className="form-group">
    <label>Body</label>
    <textarea value={this.state.body} type="text" className="form-control" name="body" onChange={(evt)=>(this.editBody(evt))}></textarea>
  </div>
    <input  type="hidden" className="form-control" name="idArticle"/>
  <button className="btn btn-primary" onClick={()=>{
    	this.props.sendPost({title: this.state.title, body: this.state.body, id: this.props.idPost});
        this.props.history.push('/'+this.props.category+'/'+this.props.idPost);
    }}>Submit</button>
                </div>
              </div>
              );
  }
  
}

const mapStateToProps = (state, ownProps)=>{
  var existingcategories = state.post.articles || [];
  var articleExist = false;
  var current = {};
  existingcategories.map((item)=>{
  	if(item.id == ownProps.match.params.id){
     	articleExist = true; 
      current = {
        idPost: ownProps.match.params.id,
        title : item.title,
        category : item.category || "",
        body : item.body || ""
      }
    }
  })
  if(articleExist)
    return current;
  
  return ({		
    idPost: ownProps.match.params.id,
    title : state.post.currentArticle.title || "",
    category : state.post.currentArticle.category || "",
    body : state.post.currentArticle.body || ""
  });
};

const mapDispatchToProps = (dispatch, actualProps) => {
  dispatch(getPost(actualProps.match.params.id))
  return{
    
    sendPost: (form)=>dispatch(editPost(form))
    
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditForm));