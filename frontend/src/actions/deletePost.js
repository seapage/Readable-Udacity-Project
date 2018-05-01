export function deletePostAction(id_post){
	return {
    	type: 'DELETE_POST',
      	id_post
    }
}
export const deletePost = (id_post) => dispatch => {
  
         
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/posts/${id_post}`,
                    {
    					method : "DELETE",
                        
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                    }
                  ).catch(()=>(""))
  dispatch(deletePostAction(id_post));
};