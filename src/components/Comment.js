import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Col, Row, Button } from 'react-bootstrap';
import './../styles/Comment.css'
import healthyRecipesApp from './../api/healthyRecipesApp';
import withAuth0Props from "./withAuth0Props";
// import { Link } from "react-router-dom";
// import { useAuth0 } from './../react-auth0-spa';

class Comment extends Component {
    state = { 
        comments: [],
        body: '',
    };

    handleChange = (event) => {
        this.setState({body: event.target.value});
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        let { id } = this.props.match.params;
        
        const response = await healthyRecipesApp({
            method: 'post',
            url: `/recipes/${id}/comment`,
            data: {
                body: this.state.body
            }
        })
        .catch(err => console.log(err));
        this.props.addComment(response.data);
    };

    render() {
        console.log(this.props);
        let { comments, isAuthenticated } = this.props;
        // const { isAuthenticated, loginWithRedirect } = useAuth0();

        return(
            <>
                <Card style={{ margin: '10px' }}>
                    <Card.Header as="h4">Comments</Card.Header>
                    <Card.Body>
                    { isAuthenticated && <form onSubmit={this.onFormSubmit} >  
                        <input type="text" value={this.state.body} onChange={this.handleChange} />
                        <input type="submit" value="Add" />
                     </form> }
                        {   comments &&
                            comments.map(comment => {
                                return (
                                    <>
                                        <Container>
                                            <Row bsPrefix="custom-comment-row">
                                                <Col xs={12} md={8}>
                                                    <Card.Title as="h5">{comment.nickname}</Card.Title>
                                                </Col>
                                                <Col xs={6} md={4}>
                                                    <Card.Title as="h6">{comment.dateOfComment}</Card.Title>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Card.Text>
                                            {comment.body}
                                        </Card.Text>
                                        <hr></hr>
                                    </>
                                );
                            })
                        }
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default withAuth0Props(Comment);