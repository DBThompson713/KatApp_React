import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from 'react-bootstrap';
import Comment from './../Comment';
import RecipeSteps from '../RecipeSteps';
import RecipeInfo from './../RecipeInfo';
import RecipeImage from '../RecipeImage';

class ViewRecipe extends Component {
    render() {
        return(
            <>
                <Container>
                    <Row>
                        <Col sm={12} xl={6} lg={6}><RecipeImage /></Col>
                        <Col sm={12} xl={6} lg={6}><RecipeInfo /></Col>
                        <Col sm={12} xl={6} lg={6}><RecipeSteps /></Col>
                        <Col sm={12} xl={6} lg={6}><Comment /></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ViewRecipe;