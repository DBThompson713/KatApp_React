import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
// import ImageUpload from "./ImageUpload";
// import RecipeCard from "./RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Faqs from "./pages/FaqPage";
import KidsCorner from "./pages/KidsCornerPage";
import Discover from "./pages/DiscoverPage";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/FaqPage" component={Faqs} />
            <Route exact path="/KidsCornerPage" component={KidsCorner} />
            <Route exact path="/DiscoverPage" component={Discover} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
