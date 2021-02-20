import React, { useEffect, useState, useRef } from 'react'
import { CPListPost } from '../ListPost'
import { CPPersonCommentsPost } from '../../components/PersonCommentsPost'
import { DeterminateCategory } from '../../helpers/helper'
import Form from 'react-bootstrap/Form'
import {
  Container,
  ContainerDataPost,
  ContainerNewPost,
  ContainerComments,
  Button,
  AlertMessage
} from './styles'
import useBlogPost from '../../hooks/useBlogPost'
export const CPDetailPost: React.FC<{
  JsonDataBlogPost: any
  HookAddCommentBlogPostAsync: (DataForm: any) => Promise<boolean>
  HookGetDataSession: () => any
  HookGetBlogPostOneAsync: ({ _id: string }) => Promise<void>
  DataBlogPost: any
}> = ({
  JsonDataBlogPost,
  HookAddCommentBlogPostAsync,
  HookGetBlogPostOneAsync,
  HookGetDataSession,
  DataBlogPost
}): JSX.Element => {
  const { HookGetBlogPostsLimitAsync, JsonDataBlogPosts } = useBlogPost()
  const [strComment, setStrComment] = useState('')
  const [JsonMessage, setJsonMessage] = useState({
    display: false,
    text: '',
    Type: ''
  })
  const TextAreaRef = useRef(null)
  useEffect(() => {
    const InitialDataPostNewAsync = async () => {
      await HookGetBlogPostsLimitAsync()
    }
    InitialDataPostNewAsync()
  }, [])
  // --------------
  // ADD COMMENTS
  // --------------
  const AddCommentsAsync = async () => {
    if (strComment === '') {
      setJsonMessage({
        display: true,
        text: 'Escriba un comentario',
        Type: 'Error'
      })
      TextAreaRef.current.focus()
      return
    }
    const User = HookGetDataSession()
    const DataForm = {
      _id: DataBlogPost._id,
      strComments: strComment,
      strNameUser: User.strNames
    }
    await HookAddCommentBlogPostAsync(DataForm)
    setJsonMessage({
      display: true,
      text: 'Comentario agregado con éxito',
      Type: 'Succes'
    })
    setTimeout(async () => {
      setJsonMessage({
        display: false,
        text: '',
        Type: ''
      })
      setStrComment('')
      await HookGetBlogPostOneAsync({ _id: DataBlogPost._id })
    }, 1000)
  }
  return (
    <Container className="animate__animated animate__fadeIn">
      <ContainerDataPost>
        <h2>{JsonDataBlogPost.strTitle}</h2>
        <h3>Categoria:{DeterminateCategory(JsonDataBlogPost.strIdCategory)}</h3>
        <small>
          Publicado:{' '}
          {JsonDataBlogPost.dtDateCreation !== undefined &&
            JsonDataBlogPost.dtDateCreation.split('CET')[0]}
        </small>
        <img src={JsonDataBlogPost.blobImg} style={{ width: '100%' }} />
        <p>{JsonDataBlogPost.strTextSmall}</p>
        <p>{JsonDataBlogPost.strTextLarge}</p>
        <hr />
        <ContainerComments>
          <h4>
            <strong>Comentarios</strong>
          </h4>
          <div>
            {JsonDataBlogPost._id !== undefined &&
              JsonDataBlogPost.ArrayComments.map((Post, Index) => {
                return (
                  <CPPersonCommentsPost
                    key={Index}
                    strNames={Post.strNameUser}
                    strComment={Post.strComment}
                    dtDateCreation={Post.dtDateCreation}
                  />
                )
              })}
          </div>
          <div>
            <Form.Label></Form.Label>
            <Form.Control
              ref={TextAreaRef}
              value={strComment}
              onChange={e => setStrComment(e.target.value)}
              as="textarea"
              placeholder="Escribe un comentario...."
              rows={3}
            />
            <AlertMessage Type={JsonMessage.Type} display={JsonMessage.display}>
              {JsonMessage.text}
            </AlertMessage>
            <Button onClick={AddCommentsAsync}>Publicar comentario</Button>
          </div>
        </ContainerComments>
      </ContainerDataPost>
      <hr />
      <ContainerNewPost>
        <h4>Nuevas Publicaciones</h4>
        {JsonDataBlogPosts.map((Post, Index) => {
          return (
            <CPListPost
              _id={Post._id}
              strTitle={Post.strTitle}
              blobImg={Post.blobImg}
              strTextSmall={Post.strTextSmall}
              key={Index}
            />
          )
        })}
      </ContainerNewPost>
    </Container>
  )
}
