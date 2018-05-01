export function editPostAction(form){
	return {
    	type: 'EDIT_POST',
      	form
    }
}
export const editPost = (form) => dispatch => {
  
         
         
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/posts/${form.id}`,
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
                               	title: form.title,
                               	body: form.body,
                        })
                    }
                  ).catch(()=>(""))
  dispatch(editPostAction(form));
};