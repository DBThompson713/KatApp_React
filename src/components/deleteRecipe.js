import React, { Fragment, Component } from "react";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth0 } from "./../react-auth0-spa";
import { Row, Col, Card, Button } from "react-bootstrap";
import healthyRecipesApp from "./../api/healthyRecipesApp";
import withAuth0Props from "./withAuth0Props";
import "./../styles/deleteButton.css";

class DeleteButton extends Component {
  onButtonSubmit = async event => {
    event.preventDefault();

    let { id } = this.props.match.params;
    let { history } = this.props;
    const response = await healthyRecipesApp({
      method: "delete",
      url: `/recipes/${id}`
    })
      .then(history.push("/"))
      .catch(err => console.log(err));
    // this.props.addComment(response.data);
  };

  render() {
    let { user } = this.props;

    if (!user || user.email !== "littlemisskat13@hotmail.com") {
      return <></>;
    }
    if (user.email === "littlemisskat13@hotmail.com") {
      return (
        <>
          <button id="deleteButtonStyle" onClick={this.onButtonSubmit}>
            Delete
          </button>
        </>
      );
    }
  }
}

export default withAuth0Props(DeleteButton);
