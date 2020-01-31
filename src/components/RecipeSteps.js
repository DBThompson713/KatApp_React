import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row } from 'react-bootstrap';

const Steps = () => {
    return(
        <>
            <Card style={{ margin: '10px' }}>
                <Card.Header as="h4">Steps</Card.Header>
                <Card.Body>
                    <Container>
                        <Row bsPrefix="custom-comment-row">
                            <Col xs={12} md={8}>
                                <Card.Title as="h6">Prep Time: 20 mins</Card.Title>
                            </Col>
                            <Col xs={6} md={4}>
                                <Card.Title as="h6">Cook Time: 20 mins</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                    <Card.Text>
                        1 - Soak 1 rice paper in a shallow dish of water until just soft (about 20 seconds).
                    </Card.Text>
                    <Card.Text>
                        2- Lay on bench and place lettuce on one end of the rice paper. 
                        Add carrot, cheese, alfalfa and chicken, and season to taste.
                    </Card.Text>
                    <Card.Text>
                        3 - Soak 1 rice paper in a shallow dish of water until just soft (about 20 seconds).
                    </Card.Text>
                    <Card.Text>
                        4 - Lay on bench and place lettuce on one end of the rice paper.
                        Add carrot, cheese, alfalfa and chicken, and season to taste.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Steps;