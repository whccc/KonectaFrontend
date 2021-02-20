import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Container } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
export const CPCardPost: React.FC<{
  _id: string
  strTitle: string
  strTextSmall: string
  blobImg: string
  strCategory: string
}> = ({ _id, strTitle, strTextSmall, blobImg, strCategory }): JSX.Element => {
  const router = useRouter()
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={blobImg} />
        <Card.Body>
          <Card.Title>
            {strTitle}
            <br />
            <small>Categoría: {strCategory}</small>
          </Card.Title>
          <Card.Text>{strTextSmall}</Card.Text>
          <Link
            as={`/BlogPost/${strTitle.replaceAll(' ', '-')}`}
            href={{
              pathname: `/BlogPost/${strTitle.replaceAll(' ', '-')}`,
              query: { CodeId: _id }
            }}
          >
            <Button>Ver Publicación</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  )
}
