
import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import imageUpload from "./../ImageUpload";

const WizardPageOne = props => {
  const { handleSubmit } = props;
  return (

    <div>
     
      <form onSubmit={handleSubmit}>
        <Field // holds recipe name
          name="title"
          type="text"
          component={renderField}
          label="Recipe Name"
        />
        <Field name="image" type="file" component={imageUpload} />
        <Field // holds recipe description
          name="description"
          type="text-area"
          component={renderField}
          label="Enter a short description of your dish"
        />
        <button // button: next
          type="submit"
          className="next"
        >
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
  validate
})(WizardPageOne);
