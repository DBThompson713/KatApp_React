import React, { Component, Fragment } from "react";
import "normalize.css";
import "./../../styles/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Button } from "react-bootstrap";
import { useAuth0 } from "../../react-auth0-spa";

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
        <h2>{user.nickname}'s Dashboard</h2>
      </div>
    </Fragment>
  );
};
export default Dashboard;
