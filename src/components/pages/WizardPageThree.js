import React from "react";
import { Field, FieldArray, reduxForm, submit } from "redux-form";
import renderField from "./renderField";
import validate from "./validate";
import DeleteIcon from "./DeleteIcon";
import AddIcon from "./AddIcon";

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
    {fields.map((step, index) => (
      <React.Fragment key={index}>
        <div id="inputFields">
          <Field
            name={`${step}`}
            type="text"
            component={renderField}
            label={`Step ${index + 1}`}
          />
          <button
            className="removeButton"
            type="button"
            component={DeleteIcon}
            onClick={() => fields.remove(index)}
          />
        </div>
      </React.Fragment>
    ))}

    <button 
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
