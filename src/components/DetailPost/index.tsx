import React from 'react'
import { CPListPost } from '../ListPost'
import { Container, ContainerDataPost, ContainerNewPost } from './styles'
export const CPDetailPost = (): JSX.Element => {
  return (
    <Container>
      <ContainerDataPost>
        <h2>Post</h2>
        <h3>Categoria:Bellaza</h3>
        <img src="/Cartagena.jpg" style={{ width: '100%' }} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          facere amet eum libero sed reiciendis accusantium officiis repellat,
          tempora quasi perspiciatis dolor cum! Molestias quos voluptas placeat
          alias ex. Aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          dolorem eos numquam obcaecati quod voluptates sunt optio asperiores,
          illum ex similique earum ratione inventore at possimus, minus libero
          esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          quis excepturi, accusamus nam ullam cumque facere dolores dolore nulla
          ut sit iste adipisci expedita praesentium beatae. Illo neque maiores
          dignissimos.
        </p>
      </ContainerDataPost>
      <hr />
      <ContainerNewPost>
        <h4>Nuevas Publicaciones</h4>
        <CPListPost />
        <CPListPost />
        <CPListPost />
      </ContainerNewPost>
    </Container>
  )
}
