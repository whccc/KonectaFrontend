import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Container,
  ContainerTitle,
  ContainerNav,
  ContainerUser
} from './styles'
import { GrLogin } from 'react-icons/gr'
import useUser from '../../hooks/useUser'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useRouter } from 'next/router'

export const CPNavbarAdmin = (): JSX.Element => {
  const { HookCloseSession } = useUser()
  const { HookGetDataSession } = useLocalStorage()
  const [DataUser, setDataUser] = useState({
    strTypeUser: '',
    strNames: ''
  })
  const router = useRouter()

  useEffect(() => {
    const InitialDataAsync = async () => {
      const Result = await HookGetDataSession()
      setDataUser({
        strTypeUser: Result.strTypeUser,
        strNames: Result.strNames
      })
    }
    InitialDataAsync()
  }, [])
  return (
    <Container>
      <ContainerTitle>
        <h2>BlogKonecta-Administrador</h2>
        <ContainerUser>
          <div>
            <img src="/Person.png" />
            <GrLogin onClick={HookCloseSession} />
          </div>
          <h6>{DataUser.strNames}</h6>
        </ContainerUser>
      </ContainerTitle>
      <ContainerNav>
        <ul>
          <li
            style={{
              background: router.pathname === '/Admin/Usuarios' && '#b53441'
            }}
          >
            <Link href="/Admin/Usuarios">
              <a
                style={{
                  color: router.pathname === '/Admin/Usuarios' && '#ffff'
                }}
              >
                Administrar Usuarios
              </a>
            </Link>
          </li>
          <li
            style={{
              background: router.pathname === '/Admin/Blog' && '#b53441'
            }}
          >
            <Link href="/Admin/Blog">
              <a
                style={{
                  color: router.pathname === '/Admin/Blog' && '#ffff'
                }}
              >
                Administrar Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Ir al blog</a>
            </Link>
          </li>
        </ul>
      </ContainerNav>
    </Container>
  )
}
