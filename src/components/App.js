import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import ImageUpload from "./ImageUpload";
import RecipeCard from "./RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <>
        <ImageUpload />
        <RecipeCard />
      </>
    );
  }
}

export default App;
