import React from "react";
import { Field, FieldArray, reduxForm, submit } from "redux-form";
import { Link } from "react-router-dom"; // for the link to
import renderField from "./renderField";
import validate from "./validate";
import DeleteIcon from "./DeleteIcon";
import AddIcon from "./AddIcon";

const WizardPageThree = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="steps" component={renderSteps} />
      <div className="flexRow">
      <div>
        <button // previous button
          type={submit}
          className="previousButton">
          Previous
        </button>
      </div>
      <div>
        <button
          className="previousButton"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}>
          Clear all input
        </button>
        </div>
        <div>
        <button // submit button
          className="previousButton"
          type="previousButton" 
          disabled={submitting}>
          Submit Recipe
        </button>
      </div>
      </div>
    </form>
  );
};

const renderSteps = ({ fields, meta: { touched, error, submitFailed } }) => (
  <>
    {fields.map((step, index) => (
      <React.Fragment key={index}>
        <div className="inputFields flexRow">
          <div>
          <Field
            name={`${step}`}
            type="text"
            component={renderField}
            label={`Step ${index + 1}`}
          />
          </div>
          <div>
          <button
            className="removeButton"
            type="button"
            component={DeleteIcon}
            onClick={() => fields.remove(index)}
          />
          </div>
        </div>
      </React.Fragment>
    ))}

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
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(WizardPageThree);
