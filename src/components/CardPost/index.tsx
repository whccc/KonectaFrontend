import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Container } from './styles'
export const CPCardPost = (): JSX.Element => {
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src="Cartagena.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button>Ver Publicación</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}
