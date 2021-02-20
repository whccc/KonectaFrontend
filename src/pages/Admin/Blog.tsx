import React, { useEffect, useState } from 'react'
import { CPNavbarAdmin } from '../../components/NavBarAdmin'
import { CPModalBlog } from '../../components/ModalBlogPost'
import { BsFilePost } from 'react-icons/bs'
import {
  Button,
  Container,
  ContainerBlogPost
} from '../../styles/PageBlogPostAdminStyle'
import { CPDetailBlopPost } from '../../components/DetailBlogPostAdmin'
import useBlog from '../../hooks/useBlogPost'
const PageBlog = (): JSX.Element => {
  const [ShowModal, setShowModal] = useState(false)
  const {
    HookCreatePostAsync,
    JsonDataBlogPosts,
    HookGetBlogPostAsync
  } = useBlog()

  useEffect(() => {
    const InitialDataAsync = async () => {
      await HookGetBlogPostAsync()
    }
    InitialDataAsync()
  }, [])

  return (
    <Container>
      <CPNavbarAdmin />
      <h2>Publicaciones</h2>
      <ContainerBlogPost>
        <CPDetailBlopPost JsonDataBlogPosts={JsonDataBlogPosts} />
      </ContainerBlogPost>
      <CPModalBlog
        ShowModal={ShowModal}
        CloseModal={() => {
          setShowModal(!ShowModal)
        }}
        HookCreatePostAsync={HookCreatePostAsync}
      />
      <Button onClick={() => setShowModal(true)}>
        <BsFilePost />
      </Button>
    </Container>
  )
}
export default PageBlog
