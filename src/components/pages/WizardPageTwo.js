import React from "react";
import { Field, reduxForm } from "redux-form"; // removed submit from destructuring
import validate from "./validate";
import renderField from "./renderField";

const WizardPageTwo = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <div>
      <h1>WizardPageTwo.js</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="recipeIngredient"
          type="text"
          component={renderField}
          label="Ingredient + amount"
        />
        <div>
          <button type="submit" className="next">
            Next page
          </button>
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
