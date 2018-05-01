export const getCommentData = (idPost, todos) => {
	return {
    	type: 'Comment',
        idPost,
  		todos
    }
}



export const TodoAPIUtilCommentForPost = (idPost) => fetch(
      			`${process.env.REACT_APP_SERVER_BACK}/posts/${idPost}/comments`,
                  {
                      	
                      headers: {
                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                  }
   				);


export const fetchComment = (idPost) => dispatch => {
  TodoAPIUtilCommentForPost(idPost).then(response => response.json()).then(todos => dispatch(getCommentData(idPost, todos))).catch(()=>(""))
};