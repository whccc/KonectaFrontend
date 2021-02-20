import React, { useEffect, useState } from 'react'
import { CPNavbarAdmin } from '../../components/NavBarAdmin'
import { CPModalBlog } from '../../components/ModalBlogPost'
import { BsFilePost } from 'react-icons/bs'
import {
  Button,
  Container,
  ContainerBlogPost
} from '../../styles/PageBlogPostAdminStyle'
import { CPDetailBlogPostAdmin } from '../../components/DetailBlogPostAdmin'
import useBlogPost from '../../hooks/useBlogPost'
import useLocalStorage from '../../hooks/useLocalStorage'
import useCategory from '../../hooks/useCategory'
import { useRouter } from 'next/router'

const PageBlog = (): JSX.Element => {
  const [ShowModal, setShowModal] = useState(false)
  const {
    HookCreatePostAsync,
    JsonDataBlogPosts,
    HookGetBlogPostAsync,
    JsonDataBlogPost,
    HookGetBlogPostOneAsync,
    HookUpdateBlogPostAsync,
    HookDeleteBlogPostAsync
  } = useBlogPost()
  const { HookGetCategoriesAsync, JsonDataCategories } = useCategory()
  const [strTypeModal, setStrTypeModal] = useState('PublicPost')

  const { HookGetDataSession } = useLocalStorage()
  const router = useRouter()
  useEffect(() => {
    const InitialDataAsync = async () => {
      await HookGetBlogPostAsync()
      await HookGetCategoriesAsync()
    }
    InitialDataAsync()
  }, [])

  // VALIDAR RUTA
  if (typeof window !== 'undefined') {
    const DataUser = HookGetDataSession()
    if (DataUser === null) {
      router.push('/Login')
      return null
    } else {
      if (DataUser.strTypeUser === 'user') {
        router.push('/')
        return null
      }
    }
  }

  return (
    <Container>
      <CPNavbarAdmin />
      <h2>Publicaciones</h2>
      <ContainerBlogPost>
        <CPDetailBlogPostAdmin
          JsonDataBlogPosts={JsonDataBlogPosts}
          HookGetBlogPostOneAsync={HookGetBlogPostOneAsync}
          onChangeTypeModalPost={() => {
            setStrTypeModal('EditPost')
          }}
          HookDeleteBlogPostAsync={HookDeleteBlogPostAsync}
        />
      </ContainerBlogPost>
      <CPModalBlog
        strTypeModal={strTypeModal}
        ShowModal={ShowModal}
        onShowModal={() => {
          setShowModal(!ShowModal)
        }}
        HookCreatePostAsync={HookCreatePostAsync}
        JsonDataBlogPost={JsonDataBlogPost}
        HookUpdateBlogPostAsync={HookUpdateBlogPostAsync}
        JsonDataCategories={JsonDataCategories}
      />
      <Button
        onClick={() => {
          setShowModal(true)
          setStrTypeModal('PublicPost')
        }}
      >
        <BsFilePost />
      </Button>
    </Container>
  )
}
export default PageBlog
