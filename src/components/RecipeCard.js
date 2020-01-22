import React, { Component } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./../styles/RecipeCard.css";
import tempImage from "./../assets/Rainbow2.png";

class RecipeCard extends Component {
  render() {
    return (
      <>
        <div class="MainCard">
          <Card style={{ width: "18rem" }}>
            <Card.Img id="mainRecipeImage" variant="top" src={tempImage} />
            <Card.Body>
              <Card.Title>Some Kind of Food</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text> Carrot yums</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default RecipeCard;
