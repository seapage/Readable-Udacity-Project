export const getPreDefinedData = (todos) => {
	return {
    	type: 'GET_POST',
  		todos
    }
}



export const TodoAPIUtil = (id) => fetch(
      			`${process.env.REACT_APP_SERVER_BACK}/posts/${id}`,
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


export const getPost = (id) => dispatch => {
  TodoAPIUtil(id)
      .then(response => response.json()).then(todos => dispatch(getPreDefinedData(todos))).catch(()=>(""))
};