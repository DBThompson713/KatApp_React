import React, { Component } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./../assets/rainbow-mini.jpg";
import myAccount from "./../assets/my_account.png";
import "./../styles/Navbar.css";

class NavbarMain extends Component {
  render() {
    return (
      <>
        <Navbar class="navbar" bg="white" expand="lg" fixed="top">
          <Navbar.Brand href="#home">
            <img id="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link class="navitem" href="#home">
                Home
              </Nav.Link>
              <Nav.Link class="navitem" href="#link">
                New Recipe
              </Nav.Link>
              <Nav.Link class="navitem" href="#home">
                All Recipes
              </Nav.Link>
              <Nav.Link class="navitem" href="#link">
                Favourites
              </Nav.Link>
              <Nav.Link class="navitem" href="/FaqPage">
                FAQ
              </Nav.Link>
              <div class="kidsCorner">
                <Nav.Link id="kids" href="/kidsCorner">
                  Kids Corner
                </Nav.Link>
              </div>
              <div id="myAccountLink">
                <Nav.Link href="#link">
                  <img id="myAccount" src={myAccount} alt="My Account" />
                  My Account
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavbarMain;
