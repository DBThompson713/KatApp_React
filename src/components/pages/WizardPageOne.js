import React from "react";
import { Field, reduxForm } from "redux-form";
// import validate from "./validate";
import renderField from "./renderField";
import imageUpload from "./../ImageUpload";

const WizardPageOne = props => {

  // const  { DOM: { textarea } } = React

  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field // holds recipe name
          name="title"
          type="text"
          component={renderField}
          label="Recipe Title"
          placeholder="Add your recipe name"
        />
        <Field // holds image
          label="Recipe Image"
          name="image"
          type="file"
          component={imageUpload}
        />
        <div>
          <Field // holds recipe description
            name="description"
            type="text"
            component="textarea"
            label="Recipe Description"
            placeholder="Enter a short description of your dish"
          />
        </div>
        <Field // preparation time
          name="prepTime"
          type="text"
          component={renderField}
          placeholder="Add value in minutes"
          label="Preparation Time"
        />
        <Field // holds cooking time
          name="cookTime"
          type="text"
          component={renderField}
          label="Cook Time"
          placeholder="Add value in minutes"
        />
        <Field // holds yield
          name="yield"
          type="text"
          component={renderField}
          label="Yield"
          placeholder="Add value in minutes"
        />
        <button // button: next
          type="submit"
          className="nextButton">
          Next Page
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // validate
})(WizardPageOne);
