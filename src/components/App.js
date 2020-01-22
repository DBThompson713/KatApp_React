import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import NavbarMain from "./Navbar";
import RecipeCard from "./RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";
import s3ImageUpload from "./s3ImageUpload";

class App extends Component {
  render() {
    return (
      <>
        <NavbarMain />
        <RecipeCard />
      </>
    );
  }
}

export default App;
