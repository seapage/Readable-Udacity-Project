import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchComment} from "../actions/getComments.js";
import {saveComment} from '../actions/comments.js';


class EditComment extends Component {
  
  
state={
			body: ""	
}

componentDidMount(){
  this.setState({
  		body: this.props.commentbody || ""
	})
}
componentWillReceiveProps(nextProps){
  this.setState({
  		body: nextProps.commentbody
	})
}


editBody(evt){
  this.setState({
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
    <label>Body</label>
    <textarea value={this.state.body} type="text" className="form-control" name="body" onChange={(evt)=>(this.editBody(evt))}></textarea>
  </div>
  <button className="btn btn-primary" onClick={()=>{
    	this.props.saveComment(this.state.body);
        this.props.history.push('/');
    }}>Submit</button>
                </div>
              </div>
              );
  }
  
}

const mapStateToProps = (state, ownProps)=>{
  var isComment = false;
  var returnGetted = "";
  if(state.post.comments[ownProps.match.params.id_post])
  state.post.comments[ownProps.match.params.id_post].map((elem)=>{
    	if(elem.id == ownProps.match.params.id_comment){
        	isComment=true;
          	returnGetted = elem.body;
        }
  
  })
  
  if(isComment){
      return ({
                commentbody: returnGetted,
      });
  }
  
};

const mapDispatchToProps = (dispatch, actualProps) => {
  dispatch(fetchComment(actualProps.match.params.id_post))
  return{
    
    saveComment: (body)=>dispatch(saveComment(body, actualProps.match.params.id_comment, actualProps.match.params.id_post))
    
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditComment));