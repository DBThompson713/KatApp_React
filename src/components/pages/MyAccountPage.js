import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import { useAuth0 } from "./../../react-auth0-spa";

// This page will be where all recipes are shown to the user or admin
const MyAccount = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <Container id="RecipeList">
        <Row id="row1">
          <h1>My Account</h1>
          <div id="loginButtons">
            <div>
              {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect({})}>Log in</Button>
              )}

              {isAuthenticated && (
                <button onClick={() => logout()}>Log out</button>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MyAccount;
