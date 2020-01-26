import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./../styles/App.css";
// import ImageUpload from "./ImageUpload";
// import RecipeCard from "./RecipeCard";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import KidsCorner from "./pages/KidsCornerPage";
import Discover from "./pages/DiscoverPage";
import Navbar from "./Navbar";
import AllRecipes from "./pages/AllRecipePage";
import FavRecipes from "./pages/FeaturedRecipes";
import MyAccount from "./pages/MyAccountPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/DiscoverPage" component={Discover} />
            <Route exact path="/KidsCornerPage" component={KidsCorner} />
            <Route exact path="/AllRecipePage" component={AllRecipes} />
            <Route exact path="/FavouriteRecipesPage" component={FavRecipes} />
            <Route exact path="/MyAccountPage" component={MyAccount} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
