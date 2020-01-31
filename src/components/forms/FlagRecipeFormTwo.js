import React, { Component } from "react";
import { connect } from "react-redux";
import { setRecipes, flagRecipe } from "./../../actions";
import { Field, reduxForm } from "redux-form";
import Input from "./fields/input";

let FlagForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="flagReason">Reason for Flag</label>
        <Field name="flagReason" component="input" type="text" required />
      </div>
      <div>
        <label htmlFor="additionalFlagInfo">Last Name</label>
        <Field name="additionalFlagInfo" component="textarea" required />
      </div>

      <button type="button">Submit</button>
    </form>
  );
};

FlagForm = reduxForm({
  // a unique name for the form
  form: "flag"
})(FlagForm);

export default FlagForm;
