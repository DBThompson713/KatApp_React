import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import healthyRecipesApp from "./../../api/healthyRecipesApp";
import RecipeCard from "./../RecipeCard";
import "./../../styles/App.css";

// This page will be where all recipes are shown to the user or admin

class AllRecipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      search: ""
    };
  }

  getRecipes = async () => {
    const response = await healthyRecipesApp
      .get("/recipes/")
      .catch(error => console.log(error));
    // console.log(response.data); // remove later

    this.setState({ recipes: response.data });
  };

  componentDidMount() {
    this.getRecipes();
  }

  updateSearch(event) {
    // console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  render() {
    const { recipes } = this.state;
    let filteredRecipes = this.state.recipes.filter(recipe => {
      return (
        recipe.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <Container id="RecipeList">
          <Row id="allRecipeTop">
            <h1>All Recipes</h1>
            <input
              type="text"
              defaultValue={this.state.search}
              onChange={this.updateSearch.bind(this)}
              placeholder="Search Recipes"
            />
          </Row>

          <Row id="recipeShow">
            {filteredRecipes.map(recipe => {
              return (
                <Link to={`RecipePage/${recipe._id}`}>
                  <RecipeCard recipe={recipe} key={recipe._id} />
                </Link>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AllRecipes;
