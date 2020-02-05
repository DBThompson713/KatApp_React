import React, { Component } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./../styles/RecipeCard.css";
import unfavouritedIcon from "./../assets/unfavourited-icon-50px.png";

class RecipeCard extends Component {
  render() {
    let { recipe } = this.props;

    return (
      <>
        <div className="MainCard">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="mainRecipeImage"
              variant="top"
              src={this.props.recipe.image}
            />
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={9}>
                    <Card.Title>{recipe.title}</Card.Title>
                  </Col>
                  <Col xs={3}>
                    <img src={unfavouritedIcon} alt="empty heart" />
                  </Col>
                </Row>
              </Container>
              <Card.Text>{recipe.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default RecipeCard;
