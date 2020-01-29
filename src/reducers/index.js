// NewRecipeForm reducer

import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form' // reducer

export default combineReducers({
    form: formReducer
});