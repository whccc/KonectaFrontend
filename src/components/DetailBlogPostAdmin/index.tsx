import React from 'react'
import { Container } from './styles'
import { DeterminateCategory } from '../../helpers/helper'
import Table from 'react-bootstrap/Table'

export const CPDetailBlopPost: React.FC<{ JsonDataBlogPosts: any }> = ({
  JsonDataBlogPosts
}): JSX.Element => {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Imagen</th>
            <th>Título</th>
            <th>Categoría</th>
            <th>Texto corto</th>
            <th>Fecha Creación</th>
          </tr>
        </thead>
        <tbody>
          {JsonDataBlogPosts.map((BlogPost, Index) => {
            return (
              <tr key={Index}>
                <td>{Index + 1}</td>
                <td>
                  <img src={BlogPost.blobImg} />
                </td>
                <td>{BlogPost.strTitle}</td>
                <td>{DeterminateCategory(BlogPost.strIdCategory)}</td>
                <td>{BlogPost.strTextSmall}</td>
                <td>{BlogPost.dtDateCreate.split('CET')[0]}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}
