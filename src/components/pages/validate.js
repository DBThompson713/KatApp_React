const validate = values => {
    const errors = {};
    if (!values.recipeName) {
      errors.recipeName = 'Required';
    }
    if (!values.photoUpload) {
      errors.photoUpload = 'Required';
    }
    if (!values.recipeDescription) {
      errors.recipeDescription = 'Required';
    }
    if (!values.recipeIngredient) {
      errors.recipeIngredient = 'Required';
    }
    if (!values.recipeStep) {
      errors.recipeStep = 'Required';
    }
    return errors;
  };
  
  export default validate;