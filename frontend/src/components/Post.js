import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {voteUp, voteDown, voteUpComment, voteDownComment} from "../actions/voting.js";
import {deletePost} from "../actions/deletePost.js";
import {fetchComment} from "../actions/getComments.js";
import {getPost} from '../actions/postLoad.js';
import {addComment, deleteComment} from '../actions/comments.js';
import ErrorPage from './404.js';

class Post extends Component {
  
  
  /* this function is borrow from internet */
Unix_timestamp(t)
{
  if(!t)
    return;
var someDate = new Date(t);
return someDate.toISOString().substr(0,10);
}
  /* end borrow */
  
state={
	body: "",
  	owner: ""
}
  editOwner(evt){
    this.setState({
          ...this.state,
          owner: evt.target.value
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
              {!this.props.article.error ? (
               <div>
               {this.props.article.deleted===false?(
              <div>
              <h1 id="header">
              {this.props.article.title}
              </h1>

                        <div className="card-header">
                            {this.Unix_timestamp(this.props.article.timestamp)} | Author: {this.props.article.author}
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{this.props.article.title}</h5>
							<p>{this.props.article.body}</p>
                          <p className="card-text"></p>
                            <Link className="btn btn-success" to={"/edit/"+this.props.article.id}>Edytuj</Link>
                            <button type="button" className="btn btn-dark" onClick={()=>{this.props.deletePost(this.props.article.id)
                                                                                   
                                                                                   	
        this.props.history.push('/');
                                                                                   }}>Delete post</button>
                        </div>
                        <div className="card-footer text-muted">

        <button type="button" className="btn btn-success" onClick={ ()=>{
            this.props.voteUp(this.props.article.id);
          }}>Vote up</button>
                                <p>Actual Vote Score: {this.props.article.voteScore}</p>
        <button type="button" className="btn btn-danger" onClick={()=>{
            this.props.voteDown(this.props.article.id);
           }}>Vote down</button>
                        </div>
                        <div className="card-footer text-muted">
{console.log(this.props.comments)}
                            Comments {this.props.comments.length}
                        </div>

                        <div className="card-body">
                          {this.props.comments.map((elem)=>(
                             <div key={elem.id}>
                             <strong>{elem.author}</strong> wrote:<br/>
                                    {elem.body}
                                <p>Actual Vote Score: {elem.voteScore}</p>
									<button type="button" className="btn btn-success" onClick={ ()=>{
            this.props.voteUpComment(elem.id);
          }}>Vote up</button>
        <button type="button" className="btn btn-danger" onClick={()=>{
            this.props.voteDownComment(elem.id);
           }}>Vote down</button>

									<Link className="btn btn-success" to={"/edit/"+this.props.article.id+"/"+elem.id}>Edit</Link>
<button type="button" className="btn btn-dark" onClick={()=>{this.props.deleteComment(elem.id)}}>Delete comment</button>

								<hr/>
							

                             </div>
                         	))}
                          <h5>add comment:</h5>

                        <div className="form-group">
                          <label>Author</label>
                          <input type="text" value={this.state.owner} className="form-control" name="title" onChange={(evt)=>(this.editOwner(evt))}/>
                        </div>
                        <div className="form-group">
                          <label>Body</label>
                          <textarea type="text" value={this.state.body} className="form-control" name="body" onChange={(evt)=>(this.editBody(evt))}></textarea>
                        </div>
                        <button className="btn btn-primary" onClick={()=>{
                              this.props.saveComment(this.state.owner, this.state.body)

                      this.setState({
                          body: "",
                          owner: ""
                      });
                          }}>Submit</button>
						</div>
</div>

):(

                  <div>
                    	<ErrorPage />
                      </div>

)}</div>
					):(
                  <div>
                    	<ErrorPage />
                      </div>
                    )}
              </div>
              );
  }
  
}


const mapStateToProps = (state, myProps)=>{
  var existingcategories = state.post.articles || [];
  var articleExist = false;
  var current = {};
  console.log(state)
  existingcategories.map((item)=>{
  	if(item.id == myProps.match.params.id){
     	articleExist = true; 
      current = {
        
    	updateID: 1,
    	article: item,
    	comments: state.post.comments[myProps.match.params.id] || [],
        voteScore: item.voteScore
      }
      console.log("current");
      console.log(current)
    }
  })
  if(articleExist)
    return current;
  
  
  
  return ({
    	updateID: state.post.update,
    	article: state.post.currentArticle || [],
    	comments: state.post.comments[myProps.match.params.id] || []
    })};
const mapDispatchToProps = (dispatch, myProps) => {
  dispatch(getPost(myProps.match.params.id));
  dispatch(fetchComment(myProps.match.params.id))
  
  
  return{
  	voteUp: (idPost) => dispatch(voteUp(idPost)),
  	voteDown: (idPost) => dispatch(voteDown(idPost)),
  	voteUpComment: (id) => dispatch(voteUpComment(id,myProps.match.params.id)),
  	voteDownComment: (id) => dispatch(voteDownComment(id,myProps.match.params.id)),
  	saveComment: (owner, body) => dispatch(addComment(owner, body, myProps.match.params.id)),
  	deleteComment: (id) => dispatch(deleteComment(id, myProps.match.params.id)),
  	deletePost: (idPost) => dispatch(deletePost(idPost))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);