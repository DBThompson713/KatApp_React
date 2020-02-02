import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from 'react-bootstrap';
import unfavouritedIcon from './../assets/unfavourited-icon-50px.png';
import ShareIcon from './../assets/share-icon-60px.png';
import RateRecipe from './rateRecipe';


class RecipeInfo extends Component {
    state = { recipe: [] };

    setRecipe() {
        this.setState({ recipe: this.props.recipe });
    }

    componentDidMount() {
        this.setRecipe()
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        let { recipe } = this.props;
        console.log(recipe)
        return(
            <>
                <Card style={{ margin: '10px' }}>
                    <Card.Body>
                        <Container>
                            <Row bsPrefix="custom-comment-row">
                                <Col xs={6} md={3}>
                                    <Card.Title as="h5">{recipe.title}</Card.Title>
                                </Col>
                                <Col xs={6} md={3}>
                                    <img src={unfavouritedIcon} alt="empty heart" />
                                </Col>
                                <Col xs={6} md={3}>
                                    <RateRecipe />
                                </Col>
                                <Col xs={6} md={3}>
                                    <img src={ShareIcon} alt="share icon" />
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                    <Card.Header as="h4">Your ingredients:</Card.Header>
                    <Card.Body>
                        <Container>
                            <Row bsPrefix="custom-comment-row">
                                <Col xs={6}>
                                    <Card.Text>{}</Card.Text>

                                    {/* {
                                        recipe.ingredients.map(ingredient => {
                                            return <Card.Text>{ingredient}</Card.Text>
                                        })
                                    } */}


                                </Col>
                                <Col xs={6}>
                                    <Card.Text>1/2 cup orange rind</Card.Text>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default RecipeInfo;
