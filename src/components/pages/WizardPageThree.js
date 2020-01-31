import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import renderField from "./renderField";
import validate from './validate';

const WizardPageThree = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
      <div>
          <h1>WizardPageThree.js</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Field 
              name="recipeStep" 
              type="textarea" 
              component={renderField} 
              onClick={submit}
              label="Step 1"
            />
            <div>
              <button 
                  type="button" 
                  className="previous" 
                  onClick={submit}>
                  Add a Step
              </button>
            </div>
            <div>
                <button // button: previous
                  type="button" 
                  className="previous" 
                  onClick={previousPage}>
                  Previous
                </button>
                <button // button: submit form
                  type="submit" 
                  onClick={submit}
                  // pristine = form untouched
                  disabled={pristine || submitting}>
                  click to submit recipe
                </button>
            </div>
          </div>
        </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardPageThree);
