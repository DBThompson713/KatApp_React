import React, { Component } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./../styles/RecipeCard.css";
import tempImage from "./../assets/vietnamese-chicken-rice-paper-rolls.jpeg";
import heart from "./../assets/heart.png";
import share from "./../assets/share_icon.png";
import carrot from "./../assets/carrot.png";

class RecipeCard extends Component {
  render() {
    return (
      <>
        <div class="MainCard">
          <Card style={{ width: "20rem" }}>
            <Card.Img id="mainRecipeImage" variant="top" src={tempImage} />
            <Card.Body id="card-color">
              <Card.Title>
                Some Kind of Food
                <img id="favourite" src={heart} />
              </Card.Title>

              <Card.Subtitle>
                This delicious and healthy meal requires little prep time and is
                always a hit!
              </Card.Subtitle>
              <Card.Text>
                42 <img id="carrot" src={carrot} />
                <img id="favourite" src={share} />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default RecipeCard;
