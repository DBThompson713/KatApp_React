import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import FlagRecipeForm from "./../forms/FlagRecipeForm";

// This page will be where all recipes are shown to the user or admin

class FlagRecipes extends Component {
  render() {
    return (
      <>
        <Container id="RecipeList">
          <Row id="row1">
            {/* <h1>Flag Recipes</h1> */}
            <FlagRecipeForm {...this.props} />
          </Row>
        </Container>
      </>
    );
  }
}

export default FlagRecipes;
