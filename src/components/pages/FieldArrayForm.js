import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import "./../../styles/recipeForm.css";

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="ingredients" component={renderIngredients} />
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

    {fields.map((ingredient, index) => (
      <React.Fragment key={index}>
        <div id="inputFields">
    
          <Field
            name={`${ingredient}`}
            type="text"
            component={renderField}
            placeholder="Ingredient"
            label={`ingredient ${index + 1}`}
          />
          <button
            id="removeButton"
            type="button"
            title="Remove Ingredient"
            onClick={() => fields.remove(index)}
          />
        </div>
      </React.Fragment>
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
