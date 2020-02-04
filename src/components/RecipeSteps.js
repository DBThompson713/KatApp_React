import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from 'react-bootstrap';
import './../styles/RecipeSteps.css'

class RecipeSteps extends Component {
 
    render() {
        let { recipe } = this.props;

        return(
            <>
                <Card style={{ margin: '10px' }}>
                    <Card.Header as="h4">Steps</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row bsPrefix="Custom-Recipe-Steps-Row">
                                <Col xs={6} md={6}>
                                    <Card.Title as="h6">Prep Time: {recipe.prepTime} mins</Card.Title>
                                </Col>
                                <Col xs={6} md={6}>
                                    <Card.Title as="h6">Cook Time: {recipe.cookTime} mins</Card.Title>
                                </Col>
                            </Row>
                        </Container>
                        <Card.Text>
                            1 - Soak 1 rice paper in a shallow dish of water until just soft (about 20 seconds).
                        </Card.Text>
                        {
                            recipe.steps && recipe.steps.map((step, index) => {
                            return <Card.Text>{index + 1} - {step}</Card.Text>
                            })
                        }
                    </Card.Body>
                </Card>
            </>
        );
    }
}
    

export default RecipeSteps;