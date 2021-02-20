import React, { useEffect, useState } from 'react'
import { CPNavbar } from '../../components/NavBar'
import { CPDetailPost } from '../../components/DetailPost'
import { Container } from '../../styles/PageDetailPostStyle'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useRouter } from 'next/router'
import useBlogPost from '../../hooks/useBlogPost'

const PageDetailPost = (): JSX.Element => {
  const {
    JsonDataBlogPost,
    HookGetBlogPostOneAsync,
    HookAddCommentBlogPostAsync
  } = useBlogPost()
  const { HookGetDataSession } = useLocalStorage()
  const router = useRouter()
  const [DataBlogPost, setDataBlogPost] = useState<any>({
    _id: ''
  })

  if (typeof window !== 'undefined') {
    if (router.query.CodeId === undefined) {
      router.push('/')
      return null
    }
  }
  useEffect(() => {
    const InitialDataBlogPostAsync = async () => {
      setDataBlogPost({
        _id: router.query.CodeId
      })
      await HookGetBlogPostOneAsync({ _id: router.query.CodeId })
    }
    InitialDataBlogPostAsync()
  }, [router.query.CodeId])
  // VALIDAR RUTA
  if (typeof window !== 'undefined') {
    const DataUser = HookGetDataSession()
    if (DataUser === null) {
      router.push('/Login')
      return null
    }
  }

  return (
    <section>
      <CPNavbar />
      <Container>
        {JsonDataBlogPost._id === undefined ? (
          <h1>Cargando...</h1>
        ) : (
          <CPDetailPost
            JsonDataBlogPost={JsonDataBlogPost}
            HookAddCommentBlogPostAsync={HookAddCommentBlogPostAsync}
            HookGetDataSession={HookGetDataSession}
            HookGetBlogPostOneAsync={HookGetBlogPostOneAsync}
            DataBlogPost={DataBlogPost}
          />
        )}
      </Container>
    </section>
  )
}
export default PageDetailPost
