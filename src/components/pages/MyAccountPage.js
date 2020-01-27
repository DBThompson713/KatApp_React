import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import { useAuth0 } from "./../../react-auth0-spa";
import Profile from "./../Profile";

// This page will be where all recipes are shown to the user or admin
const MyAccount = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <Container id="RecipeList">
        <h1>My Account</h1>
        <Profile />

        <Row>
          <div id="loginButtons">
            <div>
              {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
              )}

              {isAuthenticated && (
                <Button onClick={() => logout()}>Log out</Button>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MyAccount;
