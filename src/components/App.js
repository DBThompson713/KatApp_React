import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import ImageUpload from "./ImageUpload";
import RecipeCard from "./RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";
import HomepageAndBio from "./pages/HomePage";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HomepageAndBio />
      </>
    );
  }
}

export default App;
