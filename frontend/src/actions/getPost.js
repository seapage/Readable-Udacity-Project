export const getPreDefinedData = (todos) => {
	return {
    	type: 'PostLoad',
  		todos
    }
}



export const TodoAPIUtilPost = (name) => fetch(
      			`${process.env.REACT_APP_SERVER_BACK}/${name}/posts`,
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
export const TodoAPIUtilAllPost = () => fetch(
      			`${process.env.REACT_APP_SERVER_BACK}/posts`,
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


export const fetchPost = (name) => dispatch => {
    var ajaxLink;
  if(name === undefined)
    ajaxLink= TodoAPIUtilAllPost();
  else
    ajaxLink = TodoAPIUtilPost(name);
  ajaxLink.then(response => response.json()).then(todos => dispatch(getPreDefinedData(todos))).catch(()=>(""))
};