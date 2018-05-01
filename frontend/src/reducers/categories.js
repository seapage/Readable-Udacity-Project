function categories (state = {inne: 1, categories: [{name: 'somecategory', path: 'somecategory'},{name: 'anothercategory', path: 'anothercategory'}]}, action) {
  switch(action.type){
    case "Predefined":
      console.log(action.todos)
    	return{
          ...state,
          ...action.todos
        }
    default: 
        return state;
    }
}
export default categories; 