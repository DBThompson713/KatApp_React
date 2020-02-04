import React from "react";
import "normalize.css";
import "./.././../styles/Homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import kat from "./../../assets/temp_kat.png";
import tempImage from "./../../assets/rainbow-fruit.png";
import facebook from "./../../assets/image.png";
import instagram from "./../../assets/instagram-logo.svg";
import { useAuth0 } from "./../../react-auth0-spa";

const Homepage = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {
        <Container id="homepage">
          <Row id="row1 homePageRow">
            <Col xs={5}>
              <img
                id="halfScreenImages"
                src={tempImage}
                alt="Eat the Rainbow"
              />
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col id="rightTop" xs={7}>
              <h1>Well Kids</h1>
              <p>Well as in healthy - not a hole in the ground.</p>
              <div id="loginButtons">
                <div>
                  {!isAuthenticated && (
                    <Button onClick={() => loginWithRedirect({})}>
                      Log in / Sign Up
                    </Button>
                  )}

                  {isAuthenticated && (
                    <Button onClick={() => logout()}>Log out</Button>
                  )}
                </div>
              </div>
              {/* <div id="moreInfo">
                <p>More Info</p>
                <img id="arrowDown" src={arrowDown} />
              </div> */}
            </Col>
          </Row>

          <Row id="row2 homePageRow">
            <Col xs={8}>
              <div id="headline">
                <h6>How does Sugar affect kids with ADHD?</h6>
                <h6>Why is "Eat The Rainbow"?</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="www.google.com">Click here for lorem Ipsum!</a>

                <h4>Kids Corner</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  labore et dolore magna aliqua.
                </p>
                <Button size="lg">Kids Corner</Button>
              </div>
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col xs={4} id="secondRowImage">
              <img
                id="halfScreenImagesTwo"
                src={tempImage}
                alt="Eating Healthy is fun"
              />
            </Col>
          </Row>
          <Row id="row3 homePageRow">
            <Col xs={6} lg={4}>
              <img id="bioPic" src={kat} alt="Kat" />
            </Col>

            {/*  right hand col consists of app name and login page buttons*/}
            <Col xs={6} lg={8}>
              <div id="bio">
                <h1>Hi I'm Kat.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, dhjhe
                  aliqua. Ut enim ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit. Excepteur deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>
              <div id="socialButtons">
                <button>
                  <img src={instagram} alt="instagram" />
                </button>
                <button>
                  <img src={facebook} alt="facebook" />
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      }
    </>
  );
};

export default Homepage;
