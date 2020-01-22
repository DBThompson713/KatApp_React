import React, { Component } from "react";
import { connect } from "react-redux";
import { setRecipes, flagRecipe } from "./../../actions";
import { field, reduxForm } from "redux-form";
// import Input from "./fields/input";

class FlagRecipeForm extends Component {
  state = {
    reasonForFlag: "",
    additionalInfo: "",
    isFlagged: false,
    errorMessage: null
  };

  onFormSubmit = async formValues => {
    const { reasonForFlag, additionalInfo } = formValues;
    const { flagRecipe } = this.props;

    try {
      await flagRecipe({ reasonForFlag, additionalInfo });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    const { reasonForFlag, additionalInfo, errorMessage } = this.state;
    const { handleSubmit, error, anyTouched } = this.props;
    const isFlagged = true;

    return (
      <>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <label>Reason for Flag</label>
            <field name="flagReason" component={Input} type="text" />
          </div>
          <div>
            <label>Additional information</label>
            <field name="additionalInformation" component={Input} type="text" />
          </div>
          <input type="submit" value="Flag this recipe for review" />
        </form>
      </>
    );
  }
}

export default connect(null, { FlagRecipe })(FlagRecipeForm);
