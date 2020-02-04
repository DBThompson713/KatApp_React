import React from "react";
import { useAuth0 } from "../react-auth0-spa";


export default (Component) => {
    return (props) => {
        const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();
        return <Component {...props} isAuthenticated={isAuthenticated} />;
    }
}