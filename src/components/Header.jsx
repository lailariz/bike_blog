import React, { Component } from 'react';
import NavLink from "./NavLink";
import logo from '../bike_logo.svg';

class Header extends Component {
  render () {
    return (
			<nav className="navbar navbar-expand-lg navbar-light p-1">
        <div className="d-flex">
			    <img src={logo} className="logo" alt="logo" />
			    <button className="navbar-toggler ml-auto my-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
        </div>
			
			  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
			    <ul className="navbar-nav">
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
            <NavLink to="/About">
              <span>About</span>
            </NavLink>
			    </ul>
			  </div>
			</nav>
    );
  }
}

export default Header;
