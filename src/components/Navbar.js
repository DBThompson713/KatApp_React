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
      <Navbar className="navbar" bg="white" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img id="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="navitem m-3 d-flex" to="/">
              Home
            </NavLink>
            <NavLink className="navitem m-3 d-flex" to="#link">
              New Recipe
            </NavLink>
            <NavLink className="navitem m-3 d-flex" to="#home">
              All Recipes
            </NavLink>
            <NavLink className="navitem m-3 d-flex" to="#link">
              Favourites
            </NavLink>

            <NavLink className="navitem m-3 d-flex" to="/FaqPage">
              Discover
            </NavLink>

            <NavLink className="m-3 d-flex" to="/KidsCornerPage">
              Kids Corner
            </NavLink>
          </Nav>
          <Nav className="mr-sm-2">
            <div id="myAccountLink">
              <Nav.Link href="#link">
                <img
                  id="myAccount"
                  src={myAccount}
                  alt="My Account"
                  to="/myAccount"
                />
                My Account
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarMain;
