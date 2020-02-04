import React, { Component } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../assets/rainbow-mini.jpg";
import myAccount from "./../assets/my_account.png";
import "./../styles/Navbar.css";
import { NavLink } from "react-router-dom";

class NavbarMain extends Component {
  render() {
    return (
      <Navbar className="navbar" bg="white" expand="lg">
        <NavLink to="/">
          <img id="logo" src={logo} alt="Logo" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="navitem m-3 d-flex" to="/DashboardPage">
              Home
            </NavLink>
            <NavLink className="navitem m-3 d-flex" to="/NewRecipePage">
              New Recipe
            </NavLink>
            <NavLink className="navitem m-3 d-flex" to="/AllRecipePage">
              All Recipes
            </NavLink>
            <NavLink className="navitem m-3 d-flex" to="/FeaturedRecipesPage">
              Featured Recipes
            </NavLink>

            <NavLink className="navitem m-3 d-flex" to="/DiscoverPage">
              Discover
            </NavLink>

            <NavLink className="m-3 d-flex" to="/KidsCornerPage">
              Kids Corner
            </NavLink>
          </Nav>
          <Nav className="mr-sm-2">
            <div id="myAccountLink">
              <NavLink to="/MyAccountPage">
                <img
                  id="myAccount"
                  src={myAccount}
                  alt="My Account"
                  to="/MyAccountPage"
                />
                My Account
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
