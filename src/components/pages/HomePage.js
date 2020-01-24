import React from "react";
import "./../../styles/Homepage-and-bio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import kat from "./../../assets/temp_kat.png";
import tempImage from "./../../assets/rainbow-fruit.png";

const HomepageAndBio = () => {
  return (
    <>
      <Container id="homepage">
        <Row>
          <Col sm={7}>
            <img id="leftImage" src={tempImage} />
          </Col>
          <Col id="rightTop" sm={5}>
            <div id="headline">
              <h1>Kats Healthy App</h1>
              <p>Simple, Delicious Recipes for Kids</p>
            </div>
            <Row id="buttonsTop">
              <Button variant="success" size="md">
                Login
              </Button>
              <Button variant="success" size="md">
                Register
              </Button>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col sm={7}>
            <div id="headline">
              <h1>Healthy Recipes for kids</h1>
              <p>Simple, Delicious Recipes for Kids</p>
            </div>
          </Col>
          <Col id="rightTop" sm={5}>
            <img id="leftImage" src={tempImage} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomepageAndBio;
