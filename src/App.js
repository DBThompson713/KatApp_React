import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/pages/HomePage";
import KidsCorner from "./components/pages/KidsCornerPage";
import Discover from "./components/pages/DiscoverPage";
import Navbar from "./components/Navbar";
import AllRecipes from "./components/pages/AllRecipePage";
import FeaturedRecipes from "./components/pages/FeaturedRecipesPage";
import MyAccount from "./components/pages/MyAccountPage";
import Dashboard from "./components/pages/DashboardPage";
import NewRecipe from "./components/pages/NewRecipePage";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import fieldArrays from "./components/pages/FieldArrayExample";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Site Loading...</div>;
  }

  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/DiscoverPage" component={Discover} />
          <Route exact path="/KidsCornerPage" component={KidsCorner} />
          <Route exact path="/AllRecipePage" component={AllRecipes} />
          <Route
            exact
            path="/FeaturedRecipesPage"
            component={FeaturedRecipes}
          />

          <Route exact path="/FieldArrayExample" component={fieldArrays} />
          <PrivateRoute exact path="/MyAccountPage" component={MyAccount} />
          <Route exact path="/DashboardPage" component={Dashboard} />
          <PrivateRoute exact path="/NewRecipePage" component={NewRecipe} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
