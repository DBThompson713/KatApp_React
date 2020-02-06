import React, { Component } from "react";
import KatAppApi from "./../../api/openHealthyRecipesApp";
import withAuth0Props from "./../withAuth0Props";

class FlagRecipeForm extends React.Component {
  state = {
    reasonForFlag: ""
  };

  onFormSubmit = async event => {
    event.preventDefault();
    let { id } = this.props.match.params;
    let { history } = this.props;

    const response = await KatAppApi({
      method: "put",
      url: `/recipes/${id}`,
      data: {
        reasonForFlag: this.state.reasonForFlag
      }
    })
      .then(history.push("/"))
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({ reasonForFlag: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={this.state.reasonForFlag}
          onChange={this.handleChange}
        />
        <button>Flag Content</button>
      </form>
    );
  }
}

export default withAuth0Props(FlagRecipeForm);
