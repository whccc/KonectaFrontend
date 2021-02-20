import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Container,
  ContainerTitle,
  ContainerNav,
  ContainerUser
} from './styles'
import { GrLogin } from 'react-icons/gr'
import useLocalStorage from '../../hooks/useLocalStorage'
import useUser from '../../hooks/useUser'
import { useRouter } from 'next/router'
export const CPNavbar = (): JSX.Element => {
  const { HookGetDataSession } = useLocalStorage()
  const [DataUser, setDataUser] = useState({
    strTypeUser: '',
    strNames: ''
  })
  const { HookCloseSession } = useUser()
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
        <h2>
          {DataUser.strTypeUser === 'user'
            ? 'BlogKonecta'
            : 'BlogKonecta-Administrador'}
        </h2>
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
              background: router.pathname === '/' && '#b53441'
            }}
          >
            <Link href="/">
              <a
                style={{
                  color: router.pathname === '/' && '#ffff'
                }}
              >
                Blog
              </a>
            </Link>
          </li>
          {DataUser.strTypeUser === 'admin' && (
            <li>
              <Link href="/Admin/Usuarios">
                <a>Administrar blog</a>
              </Link>
            </li>
          )}
        </ul>
      </ContainerNav>
    </Container>
  )
}
