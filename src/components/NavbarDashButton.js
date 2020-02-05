import React, { Component } from "react";
import withAuth0Props from "./withAuth0Props";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import myAccount from "./../assets/my_account.png";
import "./../styles/Navbar.css";
import { NavLink } from "react-router-dom";

class NavbarDashButton extends Component {
    render() {
        let { user } = this.props;
        console.log(this.props)
        if (!user || user.email !== 'littlemisskat13@hotmail.com'){
            return(
                <Nav className="mr-sm-2">
                    <div id="myAccountLink">
                    <NavLink to="/DashboardPage">
                        <img
                        id="myAccount"
                        src={myAccount}
                        alt="My Account"
                        to="/MyAccountPage"
                        />
                        Dashboard
                    </NavLink>
                    </div>
                </Nav>
            );

        }  

        if (user.email === 'littlemisskat13@hotmail.com') {
            return(
                <Nav className="mr-sm-2">
                    <div id="myAccountLink">
                    <NavLink to="/DashboardPage">
                        <img
                        id="myAccount"
                        src={myAccount}
                        alt="My Account"
                        to="/MyAccountPage"
                        />
                        Admin Dashboard
                    </NavLink>
                    </div>
                </Nav>
            );
        }
        
        
    }
}

export default withAuth0Props(NavbarDashButton);