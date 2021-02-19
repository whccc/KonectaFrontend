import React from 'react'
import { CPNavbar } from '../components/NavBar'
import { Container, ContainerPots } from '../styles/PageHomeStyle'
import { CPCardPost } from '../components/CardPost'
export default function Home(): JSX.Element {
  return (
    <Container>
      <CPNavbar />
      <h1>Publicaciones</h1>
      <ContainerPots>
        <CPCardPost />
        <CPCardPost />
        <CPCardPost />
        <CPCardPost />
        <CPCardPost />
      </ContainerPots>
    </Container>
  )
}
