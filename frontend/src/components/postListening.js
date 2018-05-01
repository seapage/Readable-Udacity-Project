import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {voteUp, voteDown} from "../actions/voting.js";
import {deletePost} from "../actions/deletePost.js";
import {fetchComment} from "../actions/getComments.js";

class PostListening extends Component {
  
  
  /* this function is borrow from internet */
Unix_timestamp(t)
{
var someDate = new Date(t);
return someDate.toISOString().substr(0,10);
}
  /* end borrow */
  
 render(){
  			return (
               <div className="card text-center">
                <div className="card-header">
					{this.Unix_timestamp(this.props.article.timestamp)}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{this.props.article.title}</h5>
                  <p className="card-text">Author: {this.props.article.author}</p>
					<Link className="btn btn-success" to={"/edit/"+this.props.article.id}>Edytuj</Link>
                  	<Link className="btn btn-primary" to={"/"+this.props.article.category+"/"+this.props.article.id}>Read more</Link>
					<button type="button" className="btn btn-dark" onClick={()=>{this.props.deletePost(this.props.article.id)}}>Delete post</button>
                </div>
                <div className="card-footer text-muted">

<button type="button" className="btn btn-success" onClick={ ()=>{
	this.props.voteUp(this.props.article.id);
  }}>Vote up</button>
						<p>Actual Vote Score: {this.props.vote}</p>
<button type="button" className="btn btn-danger" onClick={()=>{
	this.props.voteDown(this.props.article.id);
   }}>Vote down</button>
                </div>
                <div className="card-footer text-muted">
					Comments {this.props.comment.length}
                </div>
              </div>
              );
  }
  
}


const mapStateToProps = (state, myProps)=>{
  return ({
    	vote: myProps.article.voteScore,
    	comment: state.post.comments[myProps.article.id] || []
    })};
const mapDispatchToProps = (dispatch, myProps) => {
  
  dispatch(fetchComment(myProps.article.id))
  
  
  return{
  	voteUp: (idPost) => dispatch(voteUp(idPost)),
  	voteDown: (idPost) => dispatch(voteDown(idPost)),
  	deletePost: (idPost) => dispatch(deletePost(idPost))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostListening);