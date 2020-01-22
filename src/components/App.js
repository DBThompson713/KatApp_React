import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
import Faqs from "./pages/FaqPage"

class App extends Component {
  render() {
    return(
      <>
    <Faqs />
      </>
    );
  }
}

export default App;
