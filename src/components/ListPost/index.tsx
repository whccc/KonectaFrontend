import React from 'react'
import { Container } from './style'
export const CPListPost = (): JSX.Element => {
  return (
    <Container>
      <li>
        <div>
          <img src="/Cartagena.jpg" />
        </div>
        <div>
          <h3>Post1</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            numquam repudiandae recusandae magni asperiores enim odit, esse
            omnis totam voluptatem ratione cum voluptatibus molestiae rem
            voluptates! Dolor quam odit eos?
          </p>
        </div>
      </li>
    </Container>
  )
}
