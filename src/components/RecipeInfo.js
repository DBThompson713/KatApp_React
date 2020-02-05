import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import unfavouritedIcon from "./../assets/unfavourited-icon-50px.png";
import ShareIcon from "./../assets/share-icon-60px.png";
import RateRecipe from "./rateRecipe";
import "./../styles/RecipeInfo.css";

class RecipeInfo extends Component {
  // state = { recipe: [] };

  // componentDidUpdate() {
  //     if (this.state.recipe !== this.props.recipe){
  //         this.setState({ recipe: this.props.recipe })
  //     }
  // }

  render() {
    // let { recipe } = this.state;
    let { recipe } = this.props;

    return (
      <>
        <Card style={{ margin: "10px" }}>
          <Card.Body>
            <Card.Title className="Recipe-Info-Title">
              {recipe.title}
            </Card.Title>
            <Container>
              <Row bsPrefix="custom-comment-row">
                <Col xs={4} md={4}>
                  <img src={unfavouritedIcon} alt="empty heart" />
                </Col>
                <Col xs={4} md={4}>
                  <RateRecipe recipe={recipe} {...this.props} />
                </Col>
                <Col xs={4} md={4}>
                  <img src={ShareIcon} alt="share icon" />
                </Col>
              </Row>
            </Container>
          </Card.Body>
          <Card.Header as="h4">Your ingredients:</Card.Header>
          <Card.Body>
            <Container>
              <Row bsPrefix="custom-comment-row">
                <Col xs={6}>
                  {recipe.ingredients &&
                    recipe.ingredients.map((ingredient, index) => {
                      return <Card.Text key={index}>{ingredient}</Card.Text>;
                    })}
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default RecipeInfo;
