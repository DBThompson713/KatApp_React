import React, { Fragment, Component } from "react";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "./../react-auth0-spa";
import { Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import healthyRecipesApp from "./../api/healthyRecipesApp";
import withAuth0Props from "./withAuth0Props";

class DeleteButton extends Component {
  onButtonSubmit = async event => {
    event.preventDefault();
    let { id } = this.props.match.params;

    const response = await healthyRecipesApp({
      method: "delete",
      url: `/recipes/${id}`
    }).catch(err => console.log(err));
    // this.props.addComment(response.data);
  };

  render() {
    let { user } = this.props;
    console.log(this.props);
    if (user.email === "littlemisskat13@hotmail.com") {
      return (
        <>
          <button onClick={this.onButtonSubmit}>Delete Recipe</button>;
        </>
      );
    }
  }
}

export default withAuth0Props(DeleteButton);
