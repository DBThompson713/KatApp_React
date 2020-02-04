import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import Comment from './../Comment';
import RecipeSteps from '../RecipeSteps';
import RecipeInfo from './../RecipeInfo';
import RecipeImage from '../RecipeImage';
import openHealthyRecipesApp from './../../api/openHealthyRecipesApp';

class ViewRecipe extends Component {
    state = { recipe: [] };

    getRecipe = async () => {
        let { id } = this.props.match.params;
        const response = await openHealthyRecipesApp.get(`/recipes/${id}`)
        .catch(error => console.log(error));
    
        this.setState({ recipe: response.data })
    }

    addComment = (comment) => {
        this.setState((state) => {
            let recipe = {...state.recipe, comments: [...state.recipe.comments, comment] };

            return { recipe };
        })
    }

    componentDidMount() {
        this.getRecipe();
    }

    render() {
        const { recipe } = this.state;
        
        return(
            <>
                <Container>
                    <Row>
                        <Col sm={12}><RecipeImage /></Col>
                        <Col sm={12}><RecipeInfo recipe={recipe} {...this.props} /></Col>
                        <Col sm={12}><RecipeSteps recipe={recipe} {...this.props} /></Col>
                        <Col sm={12}><Comment comments={recipe.comments} {...this.props} addComment={this.addComment} /></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ViewRecipe;