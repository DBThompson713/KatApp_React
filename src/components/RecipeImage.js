import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Card } from 'react-bootstrap';
import FoodImage from './../assets/food1.jpeg';

const RecipeImage = () => {
    return(
        <>
            <Card style={{ margin: '10px' }}>
                <Image src={FoodImage} fluid />
            </Card>
        </>
    );
}

export default RecipeImage;