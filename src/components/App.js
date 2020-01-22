import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import HomepageAndBio from "./pages/HomePage"

class App extends Component {
  render() {
    return(
    <>
    <HomepageAndBio />
    </>
    );
  }
}

export default App;
