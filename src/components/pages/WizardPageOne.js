import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const WizardPageOne = props => {
  const { handleSubmit } = props;
  return (
    <div>
      <h1>WizardPageOne.js</h1>
        <form onSubmit={handleSubmit}>
          <Field // holds recipe name
            name="recipeName" 
            type="text" 
            component={renderField} 
            label="Recipe Name"
          />
          {/* <Field name="photoUpload" type="image" component={renderField} label="Upload a photo" /> */}
          <Field // holds recipe description
            name="recipeDescription" 
            type="text-area"
            component={renderField} 
            label="Enter a short description of your dish" 
          />
            <button // button: next
              type="submit" 
              className="next">
              Next Page
            </button>
        </form>
    </div>
  );
};

// const renderTitle = ({ fields, meta: { error, submitFailed } }) => (

// <ul>
//   <li>
//     <button type="button" onClick={() => fields.push({})}>Add title through renderTitle function</button>
//     {submitFailed && error && <span>{error}</span>}
//   </li>
//   {fields.map((title, index) => (
//       <li key={index}>
//         <button
//           type="button"
//           title="Remove title"
//           onClick={() => fields.remove(index)}
//         />
//       <h4>Title #{index + 1}</h4>
//         <Field
//           name="recipeTitle"
//           type="text"
//           component={renderField}
//           label="Title"
//         />
//         <FieldArray name={`${title}`} component={renderField} />
//       </li>
//     ))}
//   </ul>
// )

export default reduxForm({
  form: "wizard",
  // form: "FieldArrays",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(WizardPageOne);