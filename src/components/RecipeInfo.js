import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import unfavouritedIcon from "./../assets/unfavourited-icon-50px.png";
import ShareIcon from "./../assets/share-icon-60px.png";
import RateRecipe from "./rateRecipe";

const RecipeInfo = () => {
  return (
    <>
      <Card style={{ margin: "10px" }}>
        <Card.Body>
          <Container>
            <Row bsPrefix="custom-comment-row">
              <Col xs={6} md={3}>
                <Card.Title as="h5">Rice Paper Rolls</Card.Title>
              </Col>
              <Col xs={6} md={3}>
                <img src={unfavouritedIcon} alt="empty heart" />
              </Col>
              <Col xs={6} md={3}>
                <RateRecipe />
              </Col>
              <Col xs={6} md={3}>
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
                <Card.Text>1/2 cup orange rind</Card.Text>
                <Card.Text>1 boiled dragon egg</Card.Text>
                <Card.Text>1 tsp boiled milk</Card.Text>
                <Card.Text>3 whole carrots</Card.Text>
              </Col>
              <Col xs={6}>
                <Card.Text>1/2 cup orange rind</Card.Text>
                <Card.Text>1 boiled dragon egg</Card.Text>
                <Card.Text>1 tsp boiled milk</Card.Text>
                <Card.Text>3 whole carrots</Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default RecipeInfo;
