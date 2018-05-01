function post (state = {comments : [], articles: [], currentArticle:{}, update: 1, order: 'date', orderBy: 'asc'}, action) {
  console.log(state)
  switch(action.type){
    case "DELETE_POST":
      var article= [];
      if(state.articles)
        article = state.articles.map((elem)=>{
        	if(elem.id == action.id_post)
              return {
              	...elem,
                deleted: true
              };
          return elem;
        })
      
      
    	return{
          ...state,
          articles: [...article]
        }
    case "ADD_POST":
      
    	return{
          ...state,
          articles: [
            			...state.articles,
            				{...action.article,
                             deleted: false,
                            voteScore: 1}
                    ]
        }
    case "Comment":
    	return{
          ...state,
          comments: {
            		...state.comments,
                     [action.idPost]: action.todos
          			},
        }
    case "PostLoad":
    	return{
          ...state,
          articles: action.todos,
          update: state.update+1,
        }
    case 'GET_POST':
    	return{
          ...state,
          articles: [
          				...state.articles.filter((item)=>{
                        	if(action.todos.id == item.id)
                        		return false
                          		return true;
                        }),
            			action.todos
            			
          			],
          currentArticle: action.todos,
          update: state.update+1,
        }
    case 'EDIT_POST':
      return {
      	...state,
          articles: [
          				...state.articles.map((item)=>{
                        	if(action.form.id == item.id)
                        		return {
                                	...item,
                                  	title: action.form.title,
                                  	body: action.form.body
                                }
                          		return item;
                        })
          			]
      }
    case "FILTER":
      var toFilter = state.articles;
      var ObjOrder = {};

function sortParametr(a,b,d){

  if(d==1){
    if(a>b)
      return 1;
      return -1;
  }else{
    if(a<b)
    return 1;
    return -1;
  }

}
console.log("podaje")
console.log(action.rule)
      switch(action.rule){
        case 'date':
        //order: 'date', orderBy: 'asc'
          if(action.rule==state.order){
              if(state.orderBy == 'asc'){
                ObjOrder.orderBy = 'desc';
                toFilter.sort((a, b)=>(sortParametr(a.timestamp,b.timestamp,1)))
              }else{
                ObjOrder.orderBy = 'asc';
                toFilter.sort((a, b)=>(sortParametr(a.timestamp,b.timestamp,-1)))
              }
          }else{
            ObjOrder.orderBy = 'asc';
            ObjOrder.order = "date";
            toFilter.sort((a, b)=>(sortParametr(a.timestamp,b.timestamp,-1)))
          }
            
          break;
        case 'votes':
            if(action.rule==state.order){
              if(state.orderBy == 'asc'){
                ObjOrder.orderBy = 'desc';
                toFilter.sort((a, b)=>(sortParametr(a.voteScore,b.voteScore,1)))
              }else{
                ObjOrder.orderBy = 'asc';
                toFilter.sort((a, b)=>(sortParametr(a.voteScore,b.voteScore,-1)))
              }
            break;
          }else{
            ObjOrder.orderBy = 'asc';
            ObjOrder.order = "votes";
            toFilter.sort((a, b)=>(sortParametr(a.voteScore,b.voteScore,-1)))
          }
          break;
      	}
      
      
      
      
    	return{
          ...state,
          ...ObjOrder,
          articles: toFilter
        }
    case "VOTE_UP":
      if(action.updPost=="articles")
    	return{
          ...state,
          articles: state.articles.map((hendler)=>{
          	if(hendler.id == action.votePostId)
              hendler.voteScore++;
            return hendler;
          
          })
        }
      if(action.updPost=="article"){
    	return{
          ...state,
          currentArticle: {
          				...state.currentArticle,
            			voteScore: state.currentArticle.voteScore+1
          			}
          
          }
        }
    case "VOTE_DOWN":
      if(action.updPost=="articles")
    	return{
          ...state,
          articles: state.articles.map((hendler)=>{
          	if(hendler.id == action.votePostId)
              hendler.voteScore--;
            return hendler;
          
          })
        }
      if(action.updPost=="article"){
    	return{
          ...state,
          currentArticle: {
          				...state.currentArticle,
            			voteScore: state.currentArticle.voteScore-1
          			}
          
          }
        }
    case "DELETE_POST":
      if(state.articles)
    	return{
          ...state,
          articles: state.articles.map((hendler)=>{
          	if(hendler.id == action.id_post)
              hendler.deleted = true;
            return hendler;
          
          })
        }
    case "VOTE_UP_COMMENT":
      return {
      	...state,
       comments: {
         				...state.comments,
                      [action.id_post]:state.comments[action.id_post].map((elem)=>{
                          if(elem.id===action.id_comment)
                            return {
                              ...elem,
                              voteScore: elem.voteScore+1
                            }
                            return {
                              ...elem
                            }
                      })
					}
        		
      }
      
    case "VOTE_DOWN_COMMENT":
      return {
      	...state,
       comments: {
         				...state.comments,
                      [action.id_post]:state.comments[action.id_post].map((elem)=>{
                          if(elem.id===action.id_comment)
                            return {
                              ...elem,
                              voteScore: elem.voteScore-1
                            }
                            return {
                              ...elem
                            }
                      })
					}
        		
      }
    case "DELETE_COMMENT":
      return {
      	...state,
       comments: {
         				...state.comments,
                      [action.id_post]:(state.comments[action.id_post]).filter((elem)=>{
                          if(elem.id!==action.id_comment)
                            return true;
                        return false;
                      })
					}
        		
      }
    case "EDIT_COMMENT":
        console.log(state)
      return {
      	...state,
       comments: {
         				...state.comments,
                      [action.id_post]:(state.comments[action.id_post]).map((elem)=>{
                          if(elem.id==action.id_comment)
                            return {
                            	...elem,
                              	body: action.body
                            };
                        return elem;
                      })
					}
        		
      }
    case "ADD_COMMENT":
      var array_to_send = []
      if(state.comments[action.id_post])
      	array_to_send = [...state.comments[action.id_post]];
      array_to_send.push(action.responseData);
      return {
      	...state,
       comments: {
         				...state.comments,
                      [action.id_post]:[
                      	...array_to_send
                      ]
					}
        		
      }
      
    default: 
        return state;
    }
}
export default post; 