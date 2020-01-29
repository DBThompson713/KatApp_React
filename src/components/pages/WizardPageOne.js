import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardPageOne = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h1>New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <Field name="recipeName" type="text" component={renderField} label="Recipe Name" />
          <Field name="photoUpload" type="image" component={renderField} label="Upload a photo" />
          <Field name="recipeDescription" type="text-area"
            component={renderField} label="Enter a short description of your dish" />
            <button type="submit" className="next">Next</button>
        </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardPageOne);
