import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import FAExample from "./../../styles/FAExample.css";
// import { Container, Row } from "react-bootstrap";

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="Ingredients" component={renderIngredients} />
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

const renderIngredients = ({
  fields,
  meta: { touched, error, submitFailed }
}) => (
  <>
    {/* <ul id="ingredientAdd"> */}
    {fields.map((ingredient, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}
        />
        {/* <h4>Ingredient #{index + 1}</h4> */}
        <Field
          name={`${ingredient}`}
          type="text"
          component={renderField}
          label="Add Ingredient Here"
        />
      </li>
    ))}
    {/* </ul> */}

    <button type="button" onClick={() => fields.push()}>
      Add Ingredient
    </button>
    {(touched || submitFailed) && error && <span>{error}</span>}
  </>
);

export default reduxForm({
  form: "wizard", // a unique identifier for this form
  //   validate
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FieldArraysForm);
