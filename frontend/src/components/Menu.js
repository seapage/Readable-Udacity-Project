import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Menu extends Component {
  
  
 render(){
  			return (
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Readable</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
              			<NavLink  activeClassName="active"  className="nav-link"  exact to="/">Root category</NavLink>
                  </li>
              {this.props.categories.map((key)=>(
                  <li key={key.name} className="nav-item">
              			<NavLink activeClassName="active"  className="nav-link" to={"/"+key.path}>{key.name}</NavLink>
                  </li>
				))}
     </ul>
  </div>
</nav>
              );
  }
  
}

const mapStateToProps = (state)=>({
            categories: state.categories.categories || []
        });



export default connect(mapStateToProps)(Menu);