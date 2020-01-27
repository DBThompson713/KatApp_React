import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/pages/HomePage";
import KidsCorner from "./components/pages/KidsCornerPage";
import Discover from "./components/pages/DiscoverPage";
import Navbar from "./components/Navbar";
import AllRecipes from "./components/pages/AllRecipePage";
import FavRecipes from "./components/pages/FeaturedRecipes";
import MyAccount from "./components/pages/MyAccountPage";
import Dashboard from "./components/pages/DashboardPage";
import NewRecipe from "./components/pages/NewRecipePage";
import { useAuth0 } from "./react-auth0-spa";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const { loading } = useAuth0();

  // if (loading) {
  //   return <div>Site Loading...</div>;
  // }

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
          <PrivateRoute exact path="/MyAccountPage" component={MyAccount} />
          <Route exact path="/DashboardPage" component={Dashboard} />
          <PrivateRoute exact path="/NewRecipePage" component={NewRecipe} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

// class App extends Component {
//   render() {
//     const { loading } = useAuth0();

//     if (loading) {
//       return <div>Loading...</div>;
//     }
//     return (
//       <BrowserRouter>
//         <>
//           <Navbar />
//           <Switch>
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/DiscoverPage" component={Discover} />
//             <Route exact path="/KidsCornerPage" component={KidsCorner} />
//             <Route exact path="/AllRecipePage" component={AllRecipes} />
//             <Route exact path="/FavouriteRecipesPage" component={FavRecipes} />
//             <Route exact path="/MyAccountPage" component={MyAccount} />
//             <Route exact path="/DashboardPage" component={Dashboard} />
//           </Switch>
//         </>
//       </BrowserRouter>
//     );
//   }
// }

export default App;
