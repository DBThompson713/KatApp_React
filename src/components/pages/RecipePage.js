// This page is used to display the individual recipes

import React, { Component } from "react";
import NewRecipeForm from "./../forms/NewRecipeForm";

class RecipePage extends Component {
    render() {
        return (
            <div>
                <NewRecipeForm />
            </div>
        )
    }
}

export default RecipePage