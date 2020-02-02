import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./../../styles/AllRecipeShows.css";
import healthyRecipesApp from './../../api/healthyRecipesApp';
import RecipeCard from './../RecipeCard';

// This page will be where all recipes are shown to the user or admin

class AllRecipes extends Component {
    state = { recipes: [] };

    getRecipes = async () => {
        const response = await healthyRecipesApp.get('/recipes/')
        .catch(error => console.log(error));
        // console.log(response.data) // remove later

        // this.setState({ recipes: response.data })
    }

    componentDidMount() {
        this.getRecipes();
    }

  render() {
    const { recipes } = this.state;

    return (
      <>
        <Container id="RecipeList">
          <Row id="row1">
            <h1>All Recipes</h1>
            {
                recipes.map(recipe => {
                    return <Link to={`RecipePage/${recipe._id}`}><RecipeCard recipe={recipe} key={recipe._id} /></Link>
                })
            }            
          </Row>
        </Container>
      </>
    );
  }
}

export default AllRecipes;
