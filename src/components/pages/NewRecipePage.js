import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import NewRecipeForm from "./../forms/NewRecipeForm";

// This page will be where all recipes are shown to the user or admin

class NewRecipe extends Component {
  render() {
    return (
      <>
        <Container id="RecipeList">
          <Row id="row1">
            <h1>New Recipe</h1>
            <NewRecipeForm />
          </Row>
        </Container>
      </>
    );
  }
}

export default NewRecipe;
