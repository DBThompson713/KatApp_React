import React, { Fragment } from "react";
import "normalize.css";
import "./../../styles/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Button } from "react-bootstrap";
import { useAuth0 } from "../../react-auth0-spa";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import favRecipeImage from "./../../assets/foodHeart.jpeg";
import allRecipeImage from "./../../assets/food1.jpeg";
import featRecipeImage from "./../../assets/food2.jpeg";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth0();
  const { loading } = useAuth0();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(user);

return (
    <Fragment>
      <div id="dashboard-container">
        <Row id="DashboardRow1">
          <h1>{user.nickname}'s Dashboard</h1>
        </Row>
        <Row>
            <Card style={{ width: '24rem' }}>
                <Card.Header>Profile</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Nickname: {user.nickname}</ListGroup.Item>
                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                </ListGroup>
            </Card>
        </Row>
        <Row id="DashboardRow2">

          <Col id="DashboardCardCol1">
            <NavLink to="/FavouriteRecipesPage">
              <Card id="dashboardCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={favRecipeImage} />
                <Card.Body>
                  <Card.Title>Favourite Recipes</Card.Title>
                  <Card.Text>
                    Click here to see your Favourite Recipes
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>

          <Col id="DashboardCardCol2">
            <NavLink to="/AllRecipePage">
              <Card id="dashboardCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={allRecipeImage} />
                <Card.Body>
                  <Card.Title>All Recipes</Card.Title>
                  <Card.Text>
                    Need some inspiration? Click here to see all recipes
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>

          <Col>
            <NavLink to="/FeaturedRecipesPage">
              <Card id="dashboardCard" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={featRecipeImage} />
                <Card.Body>
                  <Card.Title>Featured Recipes</Card.Title>
                  <Card.Text>See some of Kats Favourite Recipes</Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>

        </Row>
        <Row id="DashboardRow3">
          <NavLink to="/NewRecipePage">
            <Button>Add a New Recipe</Button>
          </NavLink>
        </Row>
      </div>
    </Fragment>
  );
};
export default Dashboard;
