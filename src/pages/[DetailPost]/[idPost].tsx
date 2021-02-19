import React from 'react'
import { CPNavbar } from '../../components/NavBar'
import { CPDetailPost } from '../../components/DetailPost'
import { Container } from '../../styles/PageDetailPostStyle'
const PageDetailPost = (): JSX.Element => {
  return (
    <section>
      <CPNavbar />
      <Container>
        <CPDetailPost />
      </Container>
    </section>
  )
}
export default PageDetailPost
