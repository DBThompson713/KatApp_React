import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import './../../styles/WizardScreenOne.css';

const WizardPageOne = props => {
  const { handleSubmit } = props;
  return (
    <div id="recipeFormStyle">
      <form onSubmit={handleSubmit}>
        <p>
          <Field // holds recipe name
            name="recipeName" 
            type="text" 
            component={renderField} 
            label="Recipe Name"
          />
        </p>
          {/* <Field name="photoUpload" type="image" component={renderField} label="Upload a photo" /> */}
        <p>
          <Field // holds recipe description
            name="recipeDescription" 
            type="text-area"
            component={renderField} 
            label="Enter a short description of your dish" 
          />
        </p>  
          <button
            type="submit" 
            className="nextButton">
            Next  >
          </button>
        </form>
      </div>
  );
};

export default reduxForm({
  form: "wizard",
  // form: "FieldArrays",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardPageOne);