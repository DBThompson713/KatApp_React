import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { useHistory } from "react-router-dom";

export default Component => {
  return props => {
    const {
      isAuthenticated,
      loginWithRedirect,
      logout,
      loading,
      user
    } = useAuth0();
    const history = useHistory();
    return (
      <Component
        {...props}
        history={history}
        isAuthenticated={isAuthenticated}
        user={user}
      />
    );
  };
};
