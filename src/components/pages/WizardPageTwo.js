
import React from "react";
import { Field, reduxForm, submit } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardPageTwo = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div>
      <h1>New Recipe</h1>
    <form onSubmit={handleSubmit}>
      <Field name="recipeIngredient" type="text" component={renderField} label="Ingredient + amount" />
      <div>
        <button type="button" className="previous" onClick={submit}>Add</button>
        <button type="button" className="previous" onClick={previousPage}>Previous page</button>
        <button type="submit" className="next">Next page</button>
      </div>
    </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardPageTwo);