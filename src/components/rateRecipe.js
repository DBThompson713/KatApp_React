import React, { Component } from 'react';
import rateRecipeIcon from './../assets/rateRecipeIcon40px.png'
import healthyRecipesApp from '../api/healthyRecipesApp';
import './../styles/RateRecipe.css'

class RateRecipe extends Component {
    state = { rating: null };

    // getRating = async () => {
    //     const response = await healthyRecipesApp.get('/recipes/5e29254db1f611a96fe07712/') // stand in till react routes implemented
    //         .catch(error => console.log(error));

    //         this.setState({ rating: response.data.ratings.length })
    // }

    // user inputs rating
    onClickRateButton = async (event) => {
        const response = await healthyRecipesApp.post('/recipes/5e29254db1f611a96fe07712/5e29060db1f611a96fe07709') // stand in till react routes implemented
            .catch(error => console.log(error));

        this.setState({ rating: response.data })
    }

    // component did mount makes api call and gets current rating
    componentDidMount() {
        // this.getRating();
    }

    render() {
        const { rating } = this.state;

        return(
            <div className='Rate-Recipe-Container'>
                <img src={rateRecipeIcon} alt='carrot with rating ticker' onClick={this.onClickRateButton} />
                <div className='Rate-Recipe-Ticker' onClick={this.onClickRateButton}>{rating}</div>
            </div>
        );
    }
}

export default RateRecipe;