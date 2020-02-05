import React, { Component } from "react";
import KatAppApi from "./../../api/openHealthyRecipesApp";

class FlagRecipeForm extends React.Component {
  state = {
    reasonForFlag: ""
  };

  onFormSubmit = async event => {
    event.preventDefault();
    let { id } = this.props.match.params;

    const response = await KatAppApi({
      method: "put",
      url: `/recipes/${id}`,
      data: {
        reasonForFlag: this.state.reasonForFlag
      }
    }).catch(err => console.log(err));
    console.log(response);
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

export default FlagRecipeForm;
