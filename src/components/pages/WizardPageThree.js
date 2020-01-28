import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import validate from './validate';

const WizardPageThree = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
      <div>
          <h1>New Recipe</h1>
        <form onSubmit={handleSubmit}>
        <div>
        <Field name="recipeStep" type="textarea" onClick={submit} label="Step 1" />
        <Field name="recipeStep" type="textarea" onClick={submit} label="Step 2" />
        <Field name="recipeStep" type="textarea" onClick={submit} label="Step 3" />
            <div>
                <button type="button" className="previous" onClick={submit}>Add a Step</button>
            </div>
            <div>
                <button type="button" className="previous" onClick={submit}>Submit Recipe?</button>
            </div>
            </div>
            <div>
                <button type="button" className="previous" onClick={previousPage}>Previous</button>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
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
