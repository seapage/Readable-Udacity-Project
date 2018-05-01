export function addCommentAction(owner, body, id_post, responseData){
	return {
    	type: 'ADD_COMMENT',
      	owner,
      	body,
      	id_post,
      	responseData
    }
}
export function deleteCommentAction(id_comment, id_post){
	return {
    	type: 'DELETE_COMMENT',
      	id_comment,
      	id_post
    }
}
export function saveCommentAction(body, id_post, id_comment){
	return{
    	type: "EDIT_COMMENT",
      	id_comment,
      	id_post,
      	body
    }
}
export const addComment = (owner, body, id_post) => dispatch => {
  var id_comment = Date.now()+"timeId";
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/comments`,
                    {
    					method : "POST",
                        
                      headers: {

                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({
                          		id: id_comment,
                          		timestamp : Date.now(),
                               	author: owner,
                               	body: body,
                          		parentId: id_post
                        })
                    }
                  ).catch(()=>(""))
  dispatch(addCommentAction(owner, body, id_post, {
                          		id: id_comment,
                          		timestamp : Date.now(),
                               	author: owner,
                               	body: body,
                          		parentId: id_post,
    							voteScore: 1
                        }));
};
export const deleteComment = (id, id_post) => dispatch => {
  
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/comments/${id}`,
                    {
    					method : "DELETE",
                       
                      headers: {

                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({
                        })
                    }
                  ).catch(()=>(""))
  dispatch(deleteCommentAction(id, id_post));
};
export const saveComment = (body, id_comment, id_post) => dispatch => {
  
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/comments/${id_comment}`,
                    {
    					method : "PUT",
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                        body: JSON.stringify({
                          body: body,
                          timestamp : Date.now()
                        })
                    }
                  ).catch(()=>(""))
  dispatch(saveCommentAction(body, id_post, id_comment));
};