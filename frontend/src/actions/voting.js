export function voteUpAction(id_post, updPost = "articles"){
	return {
    	type: 'VOTE_UP',
      	votePostId: id_post,
      	updPost
    }
}
export function voteDownAction(id_post, updPost){
	return {
    	type: 'VOTE_DOWN',
      	votePostId: id_post,
      	updPost
    }
}
export function voteUpCommentAction(id_comment, id_post){
	return {
    	type: 'VOTE_UP_COMMENT',
      	id_comment,
      	id_post
    }
}
export function voteDownCommentAction(id_comment, id_post){
	return {
    	type: 'VOTE_DOWN_COMMENT',
      	id_comment,
      	id_post
    }
}
export const voteUp = (id_post, updPost= "articles") => dispatch => {
  
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/posts/${id_post}`,
                    {
    					method : "POST",
                        
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({option : 'upVote', id: id_post })
                    }
                  ).catch(()=>(""))
  dispatch(voteUpAction(id_post, updPost));
};
export const voteDown = (id_post, updPost="articles") => dispatch => {
  
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/posts/${id_post}`,
                    {
    					method : "POST",
                        
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({option : 'downVote', id: id_post })
                    }
                  ).catch(()=>(""))
  dispatch(voteDownAction(id_post, updPost));
};






export const voteUpComment = (id_comment,id_post) => dispatch => {
  
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/comments/${id_comment}`,
                    {
    					method : "POST",
                        
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({option : 'upVote', id: id_post })
                    }
                  ).catch(()=>(""))
  dispatch(voteUpCommentAction(id_comment,id_post));
};
export const voteDownComment = (id_comment, id_post) => dispatch => {
  
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/comments/${id_comment}`,
                    {
    					method : "POST",
    					
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({option : 'downVote', id: id_post })
                    }
                  ).catch(()=>(""))
  dispatch(voteDownCommentAction(id_comment,id_post));
};