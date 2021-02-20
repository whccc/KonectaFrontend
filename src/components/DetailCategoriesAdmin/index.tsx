import React from 'react'
import Table from 'react-bootstrap/Table'
export const CPDetailCategories: React.FC<{ JsonDataCategories: any }> = ({
  JsonDataCategories
}): JSX.Element => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {JsonDataCategories.map((Category, Index) => {
          return (
            <tr key={Index}>
              <td>{Index + 1}</td>
              <td>{Category.strName}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
