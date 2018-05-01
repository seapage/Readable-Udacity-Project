import React, { Component } from 'react';
import Menu from './Menu.js'
import Listening from './Listening.js'
import PostForm from './postForm.js'
import EditPost from './EditPost.js'
import EditComment from './EditComment.js'
import Post from './Post.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
 render(){
  			return (
   			<div id="pageWrapper">
  				<BrowserRouter>
              		<div>
              		<Menu />
                      <Switch>
                            <Route exact path="/" component={Listening}/>
                            <Route exact path="/addpost" component={PostForm}/>
                            <Route exact path="/:category" component={Listening}/>
                            <Route exact path="/edit/:id" component={EditPost}/>EditComment
                            <Route exact path="/:category/:id" component={Post}/>
                            <Route exact path="/edit/:id_post/:id_comment" component={EditComment}/>
                      </Switch>
              		</div>
                </BrowserRouter>
   			</div>
              );
  }
  
}
export default App;
