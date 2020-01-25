import React from "react";
import "normalize.css";
import "./../../styles/Homepage-and-bio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import kat from "./../../assets/temp_kat.png";
import tempImage from "./../../assets/rainbow-fruit.png";
import facebook from "./../../assets/image.png";
import instagram from "./../../assets/instagram-logo.svg";

const HomepageAndBio = () => {
  return (
    <>
      {
        <Container id="homepage">
          <Row id="row1">
            <Col>
              <img src={tempImage} />
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col id="rightTop">
              <h1>Kats Healthy App</h1>
              <p>Simple, Delicious Recipes for Kids</p>
              <div id="loginButtons">
                <Button variant="success" size="lg">
                  Login
                </Button>
                <Button variant="success" size="lg">
                  Register
                </Button>
              </div>
              {/* <div id="moreInfo">
                <p>More Info</p>
                <img id="arrowDown" src={arrowDown} />
              </div> */}
            </Col>
          </Row>

          <Row id="row2">
            <Col xs={7}>
              <div id="headline">
                <h6>How does Sugar affect kids with ADHD?</h6>
                <h6>Why is "Eat The Rainbow"?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#">Click here for lorem Ipsum!</a>

                <h4>Kids Corner</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  labore et dolore magna aliqua.
                </p>
                <Button size="lg">Kids Corner</Button>
              </div>
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col xs={5} id="rightTop">
              <img src={tempImage} />
            </Col>
          </Row>
          <Row id="row3">
            <Col>
              <img id="bioPic" src={kat} />
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col>
              <div id="bio">
                <h1>Hi I'm Kat.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, dhjhe
                  aliqua. Ut enim ad minim veniam ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  eu fugiat nulla pariatur. Excepteur deserunt mollit anim id
                  est laborum.
                </p>
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
              <div id="socialButtons">
                <button>
                  <img src={instagram} />
                </button>
                <button>
                  <img src={facebook} />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default HomepageAndBio;