import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {fetchPost} from '../actions/getPost.js';
import {filterBy} from '../actions/filter.js';
import PostListening from './postListening.js';


class Listening extends Component {
  
  
  
 render(){
  			return (
   			<div>
              <h1 id="header">
              {this.props.match.params.category !== undefined?(
            		this.props.match.params.category
            	):(
            		"Root category"
            	)}
              	
              </h1>
			<div>
				<button type="button" className="btn btn-link" onClick={()=>{
                                                                       	this.props.filterBy('votes');
                                                                       }}>Sort by votes</button>
				<button type="button" className="btn btn-link" onClick={()=>{
                                                                       	this.props.filterBy('date');
                                                                       }}>Sort by Date</button>

				<Link type="button" className="btn btn-success" to={"/addpost"}>Add post</Link>
			</div>


{this.props.post.articles.length === 0 ? ("Empty category"):("")}
{console.log("art")}
{console.log(this.props.post.articles)}
{this.props.post.articles.map((article)=>{
			if(!(Object.keys(article).length === 0 && article.constructor === Object))//object not empty
				 if(!article.deleted)
						if(article.category == this.props.match.params.category || this.props.match.params.category == undefined)
						return <PostListening key={article.id} article={article} />;
 				return;
})}

              </div>
              );
  }
  
}

const mapStateToProps = (state)=>{
  return ({
  	...state,
    post: {
    	...state.post,
      	articles: state.post.articles || []
    }
  });
};

const mapDispatchToProps = (dispatch, actualProps) => {
  dispatch(fetchPost(actualProps.match.params.category))
  
  return{
    filterBy: (rule) => dispatch(filterBy(rule))
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Listening));