import React, { Component } from 'react';
import rateRecipeIcon from './../assets/rateRecipeIcon40px.png'

class RateRecipe extends Component {
    state = { rating: null };

    ratingClicked = () => {
        this.setState(({ rating }) => ({ rating: rating + 1 }));
    }

    render() {
        const { rating } = this.state;

        return(
            <div>
                <button onClick={this.ratingClicked}>
                    <img src={rateRecipeIcon} alt='carrot icon' />
                </button>
                <div>{rating}</div>
            </div>
        );
    }
}

export default RateRecipe;


/*
    I want the user to be able to see the current recipe rating when they open the recipe

    They should have the ability to click a rating button and the counter to increase by one

    If they click the button again, the counter will decrease by one indicating they have
    undone their rating
*/
// 0) onClick => will send through the user id
// 1) make a new end point in the recipes routes (recieves user ID)
// 2) Create a new method in the recipes controller adds users id to ratings array on recipes.
// 2.1) if id is not in the array add the id. Else remove the id. 
// 2.2) carrot number must come from the axios call