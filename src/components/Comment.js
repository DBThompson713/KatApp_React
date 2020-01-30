import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, InputGroup, FormControl, Button, Container, Col, Row } from 'react-bootstrap';
import './../styles/Comment.css'


class Comment extends Component {
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

/*
bsPrefix="custom-comment-row"
    What am I trying to do?
    - Build a comment component that allows users to input comments then display those comments

    Features/Styling
    - All expanded card on the desktop version
    - Collapsed default on mobile version

    Tasks
    - Build basically styling and make sure core functionality works
    - Make api call to grab comments info

                            <Container>
                                <Row>
                                    <Col><h3>John Kerry</h3></Col>
                                    <Col xs={6}></Col>
                                    <Col>21.05.20</Col>
                                </Row>
                            </Container>

*/