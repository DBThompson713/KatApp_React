import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
// import validate from './validate'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

// const renderHobbies = ({ fields, meta: { error } }) => (
//   <ul>
//     <li>
//       <button type="button" onClick={() => fields.push()}>
//         Add Hobby
//       </button>
//     </li>
//     {fields.map((hobby, index) => (
//       <li key={index}>
//         <button
//           type="button"
//           title="Remove Hobby"
//           onClick={() => fields.remove(index)}
//         />
//         <Field
//           name={hobby}
//           type="text"
//           component={renderField}
//           label={`Hobby #${index + 1}`}
//         />
//       </li>
//     ))}
//     {error && <li className="error">{error}</li>}
//   </ul>
// )

const FieldArraysForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="recipeIngredient"
        type="text"
        component={renderField}
        label="Ingredientz"
        />
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
  )
}

const renderIngredients = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Ingredient
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li>
    {console.log(fields)}
    {fields.map((ingredient, index) => (
      <li key={index}>
        {/* <button
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}
        /> */}
        <h4>Ingredient #{index + 1}</h4>
        {/* <Field
          name={`${ingredient}`}
          type="text"
          component={renderField}
          label="Ingredient"
        />
        <Field
          name={`${ingredient}`}
          type="text"
          component={renderField}
          label="INGREDIENT" */}
        {/* /> */}
        {console.log(ingredient)};
        <FieldArray name={`${ingredient}`} component={renderField} />
      </li>
    ))}
  </ul>
)

export default reduxForm({
  form: 'fieldArrays', // a unique identifier for this form
//   validate
})(FieldArraysForm)