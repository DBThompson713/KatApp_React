import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import RecipeCard from './../RecipeCard';
import openHealthyRecipesApp from './../../api/openHealthyRecipesApp';

class FlaggedRecipesIndexPage extends Component {
    state = { flaggedRecipes: [] }

    getFlaggedRecipes = async () => {
        const response = await openHealthyRecipesApp.get('/recipes/flaggedrecipes')
        .catch(error => console.log(error));
        
        if (response) {
            this.setState({ flaggedRecipes: response.data });
        }
    }

    componentDidMount() {
        this.getFlaggedRecipes();
    }

    render() {
        const { flaggedRecipes } = this.state;

        return (
          <div>
            <Container id="RecipeList">
              <Row id="allRecipeTop">
                <h1>Flagged Recipes</h1>
              </Row>
    
              <Row id="recipeShow">
                {flaggedRecipes.map(recipe => {
                  return (
                    <Link to={`RecipePage/${recipe._id}`} key={recipe._id}>
                      <RecipeCard recipe={recipe} />
                    </Link>
                  );
                })}
              </Row>
            </Container>
          </div>
        );
      }
}

export default FlaggedRecipesIndexPage;