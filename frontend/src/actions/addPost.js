export function addPostAction(form, article){
	return {
    	type: 'ADD_POST',
      	form,
      article
    }
}
export const addPost = (form) => dispatch => {
  
         var article = {
                          		id: Date.now()+"timeId",
                          		timestamp : Date.now(),
                               	title: form.title,
                               	body: form.body,
                               	category: form.category || "nocategory",
                               	author: form.owner
                        };
         
         fetch(
                  `${process.env.REACT_APP_SERVER_BACK}/posts`,
                    {
                      
                      method: 'POST',
                      headers: {

                        "Access-Control-Allow-Origin" : '*',
                        'Accept': 'application/json',
                        'Authorization': 'whatever you want',
                        'Content-Type': 'application/json',
                      },
                        'Content-Type': 'application/json',
                                 
                                 //},
                        'body': JSON.stringify(article)
                    }
                  ).then((response)=>{
         
  if (response.ok) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
         
         }).catch(()=>(""))
      
      
  dispatch(addPostAction(form.id, article));
};