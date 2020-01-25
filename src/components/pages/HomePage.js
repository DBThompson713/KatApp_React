import React from "react";
import "normalize.css";
import "./../../styles/Homepage-and-bio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import kat from "./../../assets/temp_kat.png";
import tempImage from "./../../assets/rainbow-fruit.png";
import facebook from "./../../assets/image.png";
import instagram from "./../../assets/instagram-logo.svg";
import arrowDown from "./../../assets/arrowDown.png";

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

        /*     
      <Container id="homepage">
        <Row>
          <Col sm={7}>
            <img id="leftImage" src={tempImage} />
          </Col>
          <Col id="rightTop" sm={5}>
            <div id="headlineLogin">
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
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={7}>
            <div id="headline">
              <h1>Healthy Recipes for kids</h1>
              <h6>How does Sugar affect kids with ADHD?</h6>
              <h6>Why is it so important to "Eat The Rainbow"?</h6>
              <a href="#">Click Here for Answers to healthy questions!</a>

              <h1>Kids Corner</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button size="sm">Kids Corner</Button>
            </div>
          </Col>
          <Col id="rightTop" lg={5}>
            <img id="rightImage" src={tempImage} />
          </Col>
        </Row>

        <Row>
          <Col sm={5} id="bioImageSide">
            <img id="bioImage" src={kat} />
          </Col>
          <Col id="rightTop" sm={7}>
            <div id="bio">
              <h1>Hi I'm Kat.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        </Row>
      </Container> */
      }
    </>
  );
};

export default HomepageAndBio;
