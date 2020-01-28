import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Accordion, Container, Row, Col } from 'react-bootstrap';


class Comment extends Component {
    render() {
        return(
            <>
                <Accordion defaultActiveKey="0" >
                    <Card >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        Comments
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <Container>
                            <Row>
                                <Col sm={8}>Title</Col>
                                <Col sm={4}>Date</Col>
                            </Row>
                        </Container>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        );
    }
}

export default Comment;

/*
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