import React from 'react'
import { Card, Button } from "react-bootstrap"
import photo from "../assets/testimage.jpg"

function ProductCards() {
  return (
    <div>
      <Card style={{ width: '18rem' }} border="primary" bg="success">
        <Card.Img variant="bottom" src={photo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
