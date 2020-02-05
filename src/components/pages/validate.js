const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (isNaN(values.prepTime)) {
    errors.prepTime = `Please enter a number`;
  }

  if (isNaN(values.cookTime)) {
    errors.cookTime = `Please enter a number`;
  }

  if (!values.cookTime) {
    errors.cookTime = "Required";
  }
  if (!values.prepTime) {
    errors.prepTime = "Required";
  }

  if (!values.yield) {
    errors.yield = "Required";
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
