import React, { Component } from 'react';
import withAuth0Props from "./withAuth0Props";
import rateRecipeIcon from './../assets/rateRecipeIcon40px.png'
import healthyRecipesApp from '../api/healthyRecipesApp';
import openHealthyRecipesApp from '../api/openHealthyRecipesApp';
import './../styles/RateRecipe.css'

class RateRecipe extends Component {
    state = { rating: null };

    getRating = async () => {
        let { id } = this.props.match.params;
        const response = await openHealthyRecipesApp.get(`/recipes/${id}`)
            .catch(error => console.log(error));

        this.setState({ rating: response.data.ratings.length })
    }

    onClickRateButton = async (event) => {
        let { id } = this.props.match.params;
        const response = await healthyRecipesApp.post(`/recipes/${id}`)
            .catch(error => console.log(error));
        console.log(response)

        this.setState({ rating: response.data })
    }

    // component did mount makes api call and gets current rating
    componentDidMount() {
        this.getRating();
    }

    render() {
        let { rating } = this.state;
        let { isAuthenticated } = this.props;

        return(
            <div className='Rate-Recipe-Container'>
                { isAuthenticated &&  <>
                    <img src={rateRecipeIcon} alt='carrot with rating ticker' onClick={this.onClickRateButton} />
                    <div className='Rate-Recipe-Ticker' onClick={this.onClickRateButton}>{rating}</div> </>
                }
            </div>
        );
    }
}

export default withAuth0Props(RateRecipe);
// export default RateRecipe;