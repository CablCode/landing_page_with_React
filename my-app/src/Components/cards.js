import React from "react";
import { Card, Button} from "react-bootstrap";

function CardsFront(props) {
  return (
    <div>
        <Card style={{ width: '14rem', height: '580px' }}>
            <Card.Img variant="top" src="https://static01.nyt.com/images/2020/10/29/style/28MOON-01/oakImage-1603985177355-mediumSquareAt3X.jpg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{height: '200px'}}>{props.text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default CardsFront;