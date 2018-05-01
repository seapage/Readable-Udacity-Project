export const getPreDefinedData = (todos) => {
	return {
    	type: 'Predefined',
  		todos
    }
}



export const TodoAPIUtil = () => fetch(
      			`${process.env.REACT_APP_SERVER_BACK}/categories`,
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


export const fetchTodos = () => dispatch => {
  TodoAPIUtil()
      .then(response => response.json()).then(todos => dispatch(getPreDefinedData(todos))).catch(()=>(""))
};