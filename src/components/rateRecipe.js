import React, { Component } from 'react';
import rateRecipeIcon from './../assets/rateRecipeIcon40px.png'
import healthyRecipesApp from '../api/healthyRecipesApp';
import './../styles/RateRecipe.css'

class RateRecipe extends Component {
    state = { rating: null };

    // getRating = async () => {
    //     let { id } = this.props.match.params;
    //     const response = await healthyRecipesApp.get(`/recipes/${id}`)
    //         .catch(error => console.log(error));

    //     this.setState({ rating: response.data.ratings.length })
    // }

    onClickRateButton = async (event) => {
        let { id } = this.props.match.params;
        console.log(id)
        const response = await healthyRecipesApp.post(`/recipes/${id}`)
            .catch(error => console.log(error));
        console.log(response)

        this.setState({ rating: response.data })
    }

    // component did mount makes api call and gets current rating
    componentDidMount() {
        // this.getRating();
    }

    render() {
        const { rating } = this.state;
        console.log(this.props)

        return(
            <div className='Rate-Recipe-Container'>
                <img src={rateRecipeIcon} alt='carrot with rating ticker' onClick={this.onClickRateButton} />
                <div className='Rate-Recipe-Ticker' onClick={this.onClickRateButton}>{this.props.rating && rating}</div>
            </div>
        );
    }
}

export default RateRecipe;