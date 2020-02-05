import React, { Component } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../assets/rainbow-mini.jpg";
import myAccount from "./../assets/my_account.png";
import "./../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import NavbarDashButton from './NavbarDashButton';

class NavbarMain extends Component {
  state = { expanded: false };

  toggleExpand = () => {
    this.setState(state => {
      return { expanded: !state.expanded };
    });
  };

  render() {
    return (
      <Navbar
        expanded={this.state.expanded}
        className="navbar"
        bg="white"
        expand="lg"
        fixed="top"
      >
        <NavLink to="/">
          <img id="logo" src={logo} alt="Logo" />
        </NavLink>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={this.toggleExpand}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className="navitem m-3 d-flex"
              to="/"
              onClick={this.toggleExpand}
            >
              Home
            </NavLink>
            <NavLink
              className="navitem m-3 d-flex"
              to="/NewRecipePage"
              onClick={this.toggleExpand}
            >
              New Recipe
            </NavLink>
            <NavLink
              className="navitem m-3 d-flex"
              to="/AllRecipePage"
              onClick={this.toggleExpand}
            >
              All Recipes
            </NavLink>
            <NavLink
              className="navitem m-3 d-flex"
              to="/FeaturedRecipesPage"
              onClick={this.toggleExpand}
            >
              Featured Recipes
            </NavLink>
            ​
            <NavLink
              className="navitem m-3 d-flex"
              to="/DiscoverPage"
              onClick={this.toggleExpand}
            >
              Discover
            </NavLink>
            ​
            <NavLink
              className="m-3 d-flex"
              to="/KidsCornerPage"
              onClick={this.toggleExpand}
            >
              Kids Corner
            </NavLink>
          </Nav>
          <NavbarDashButton />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
