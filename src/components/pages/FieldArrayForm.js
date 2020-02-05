import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import "./../../styles/recipeForm.css";
import DeleteIcon from "./DeleteIcon";
import AddIcon from "./AddIcon";
// import { Container, Row } from "react-bootstrap";

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <section>
      <FieldArray 
        name="ingredients" 
        type="text"
        component={renderIngredients}
      />
        <div>
          <button // previous button
            type="submit"
            className="previousButton">
            Previous Page
          </button>
        </div>
        <div>
          <button // next button: acts as submit
            className="nextButton"
            type="submit"
            disabled={submitting}>
            Next page
          </button>
          </div>
          <div>
          <button // clear all input button
            className="nextButton"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}>
            Clear all input
          </button>
        </div>
      </section>
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
      <React.Fragment key={index}>
        <div id="inputFields">
          <Field
            name={`${ingredient}`}
            type="text"
            component={renderField}
            placeholder="Add ingredients 1-by-1"
            label={`Ingredient ${index + 1}`}
          />
          <button
            className="removeButton"
            component={DeleteIcon}
            type="button"
            // title="Remove Ingredient"
            onClick={() => fields.remove(index)}
          />
        </div>
      </React.Fragment>
    ))}
    {/* </ul> */}

    <button
      className="addButton"
      type="button"
      component={AddIcon}
      onClick={() => fields.push()}>
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
