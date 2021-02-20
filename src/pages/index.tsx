import React, { useEffect } from 'react'
import { CPNavbar } from '../components/NavBar'
import { Container, ContainerPots } from '../styles/PageHomeStyle'
import { CPCardPost } from '../components/CardPost'
import useLocalStorage from '../hooks/useLocalStorage'
import useBlogPost from '../hooks/useBlogPost'
import { useRouter } from 'next/router'
export default function Home(): JSX.Element {
  const { HookGetDataSession } = useLocalStorage()
  const { HookGetBlogPostAsync, JsonDataBlogPosts } = useBlogPost()
  const router = useRouter()
  // VALIDAR RUTA
  if (typeof window !== 'undefined') {
    const DataUser = HookGetDataSession()
    if (DataUser === null) {
      router.push('/Login')
      return null
    }
  }
  useEffect(() => {
    const InitialDataBlogPostAsync = async () => {
      await HookGetBlogPostAsync()
    }
    InitialDataBlogPostAsync()
  }, [])
  console.log(JsonDataBlogPosts)
  return (
    <Container>
      <CPNavbar />
      <h1>Publicaciones</h1>
      {JsonDataBlogPosts.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <ContainerPots className="animate__animated animate__fadeIn">
          {JsonDataBlogPosts.map((BlogPost, Index) => {
            return (
              <CPCardPost
                key={Index}
                _id={BlogPost._id}
                strTitle={BlogPost.strTitle}
                strTextSmall={BlogPost.strTextSmall}
                blobImg={BlogPost.blobImg}
                strCategory={BlogPost.strIdCategory}
              />
            )
          })}
        </ContainerPots>
      )}
    </Container>
  )
}
