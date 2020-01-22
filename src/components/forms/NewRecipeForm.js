import React, { Component } from "react";
// import LocalApi from "./../../apis/local_api";
import { connect } from "react-redux";
import { setBookmarks, createBookmark } from "./../../actions";
import { field, reduxForm } from "redux-form";
import Input from "./fields/input";

class NewRecipeForm extends Component {
  state = {};
}

class BookmarksForm extends Component {
  state = {
    title: "",
    url: "",
    errorMessage: null
  };

  onFormSubmit = async formValues => {
    const { title, url } = formValues;
    const { createRecipe } = this.props;

    try {
      await createBookmark({ title, url });
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  render() {
    const { title, url, errorMessage } = this.state;
    const { handleSubmit, error, anyTouched } = this.props;

    return (
      <>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <label>Title</label>
            <field name="title" component={Input} type="text" />
          </div>
          <div>
            <label>Url</label>
            <field name="url" component={Input} type="text" />
          </div>
          <input type="submit" value="Create New Bookmark" />
        </form>
      </>
    );
  }
}

export default connect(null, { setBookmarks })(newRecipeForm);
