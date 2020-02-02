import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, InputGroup, FormControl, Button, Container, Col, Row } from 'react-bootstrap';
import './../styles/Comment.css'
import healthyRecipesApp from './../api/healthyRecipesApp';


class Comment extends Component {
    // state = { comments: [] };

    // setComments() {
    //     this.setState({ comments: this.props.recipe.comments })
    // }

    // onClickAddComment = async (event) => {
    //     let { id } = this.props.match.params;
    //     const response = await healthyRecipesApp.post(`/recipes/${id}/comment`)
    //     .catch(error => console.log(error));
    //     console.log(response)
    
    //     // this.setState({ recipe: response.data })
    // }

    // componentDidMount() {
    //     this.setComments();
    // }

    render() {
        return(
            <>
                <Card style={{ margin: '10px' }}>
                    <Card.Header as="h4">Comments</Card.Header>
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <FormControl
                            aria-label="Add comment"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Add</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Container>
                            <Row bsPrefix="custom-comment-row">
                                <Col xs={12} md={8}>
                                    <Card.Title as="h5">Bob Dole</Card.Title>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Card.Title as="h6">19.05.20</Card.Title>
                                </Col>
                            </Row>
                        </Container>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <hr></hr>
                        <Container>
                            <Row bsPrefix="custom-comment-row">
                                <Col xs={12} md={8}>
                                    <Card.Title as="h5">John Kerry</Card.Title>
                                </Col>
                                <Col xs={6} md={4}>
                                    <Card.Title as="h6">21.05.20</Card.Title>
                                </Col>
                            </Row>
                        </Container>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Comment;