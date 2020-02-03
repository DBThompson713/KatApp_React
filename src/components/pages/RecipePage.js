
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import Comment from './../Comment';
import RecipeSteps from '../RecipeSteps';
import RecipeInfo from './../RecipeInfo';
import RecipeImage from '../RecipeImage';
import healthyRecipesApp from './../../api/healthyRecipesApp';

class ViewRecipe extends Component {
    state = { recipe: [] };

    getRecipe = async () => {
        let { id } = this.props.match.params;
        const response = await healthyRecipesApp.get(`/recipes/${id}`)
        .catch(error => console.log(error));
        console.log(response)
    
        this.setState({ recipe: response.data })
    }

    componentDidMount() {
        this.getRecipe();
    }

    render() {
        const { recipe }= this.state;
        
        return(
            <>
                <Container>
                    <Row>
                        <Col sm={12} xl={6} lg={6}><RecipeImage /></Col>
                        <Col sm={12} xl={6} lg={6}><RecipeInfo recipe={recipe} {...this.props}/></Col>
                        <Col sm={12} xl={6} lg={6}><RecipeSteps /></Col>
                        <Col sm={12} xl={6} lg={6}><Comment /></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ViewRecipe;

