import React from "react";
import { Field, FieldArray, reduxForm, submit } from "redux-form";
import renderField from "./renderField";
import validate from "./validate";

const WizardPageThree = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="steps" component={renderSteps} />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

const renderSteps = ({ fields, meta: { touched, error, submitFailed } }) => (
  <>
    {/* <ul id="ingredientAdd"> */}
    {fields.map((step, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Step"
          onClick={() => fields.remove(index)}
        />
        {/* <h4>Ingredient #{index + 1}</h4> */}
        <Field
          name={`${step}`}
          type="text"
          component={renderField}
          label="Add Step Here"
        />
      </li>
    ))}
    {/* </ul> */}

    <button type="button" onClick={() => fields.push()}>
      Add Step
    </button>
    {(touched || submitFailed) && error && <span>{error}</span>}
  </>
);

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardPageThree);
