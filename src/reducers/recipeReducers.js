export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_RECIPES":
      return action.payload;
    default:
      return state;
  }
};
