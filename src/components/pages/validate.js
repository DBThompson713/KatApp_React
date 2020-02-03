const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.image) {
    errors.image = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.ingredients) {
    errors.ingredients = "Required";
  }
  if (!values.steps) {
    errors.steps = "Required";
  }
  return errors;
};

export default validate;
