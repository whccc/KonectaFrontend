import React from 'react'
import { Container } from './styles'
export const CPPersonCommentsPost: React.FC<{
  strNames: string
  strComment: string
  dtDateCreation: string
}> = ({ strNames, strComment, dtDateCreation }): JSX.Element => {
  return (
    <Container>
      <div>
        <img src="/Person.png" />
        <h4>{strNames}</h4>
        <small>{dtDateCreation.split('CET')[0]}</small>
      </div>
      <div>
        <p>{strComment}</p>
      </div>
    </Container>
  )
}
