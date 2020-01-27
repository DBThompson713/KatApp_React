import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";

// This page will be where all recipes are shown to the user or admin

class NewRecipe extends Component {
  render() {
    return (
      <>
        <Container id="RecipeList">
          <Row id="row1">
            <h1>New Recipe</h1>
          </Row>
        </Container>
      </>
    );
  }
}

export default NewRecipe;
