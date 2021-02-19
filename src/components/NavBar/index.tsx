import React from 'react'
import Link from 'next/link'
import {
  Container,
  ContainerTitle,
  ContainerNav,
  ContainerUser
} from './styles'
import { GrLogin } from 'react-icons/gr'
export const CPNavbar = (): JSX.Element => {
  return (
    <Container>
      <ContainerTitle>
        <h2>BlogKonecta</h2>
        <ContainerUser>
          <div>
            <img src="/Person.png" />
            <GrLogin />
          </div>
          <h6>Wilson Herney Castro Cabrera</h6>
        </ContainerUser>
      </ContainerTitle>
      <ContainerNav>
        <ul>
          <li>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
        </ul>
      </ContainerNav>
    </Container>
  )
}
