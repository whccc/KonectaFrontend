import React, { useEffect } from 'react'
import { CPNavbar } from '../components/NavBar'
import { Container, ContainerPots } from '../styles/PageHomeStyle'
import { CPCardPost } from '../components/CardPost'
import useLocalStorage from '../hooks/useLocalStorage'
import { useRouter } from 'next/router'
export default function Home(): JSX.Element {
  const { HookGetDataSession } = useLocalStorage()
  const router = useRouter()
  // VALIDAR RUTA
  if (typeof window !== 'undefined') {
    const DataUser = HookGetDataSession()
    if (DataUser === null) {
      router.push('/Login')
      return null
    } else {
      if (DataUser.strTypeUser === 'admin') {
        router.push('/Admin/Usuarios')
        return null
      }
    }
  }
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
