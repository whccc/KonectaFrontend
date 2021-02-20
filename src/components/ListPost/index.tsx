import React from 'react'
import { Container } from './style'
import Link from 'next/link'
export const CPListPost: React.FC<{
  strTitle: string
  _id: string
  strTextSmall: string
  blobImg: any
}> = ({ strTitle, _id, blobImg, strTextSmall }): JSX.Element => {
  return (
    <Container>
      <li>
        <div>
          <img src={blobImg} />
        </div>
        <div>
          <Link
            as={`/BlogPost/${strTitle.replaceAll(' ', '-')}`}
            href={{
              pathname: `/BlogPost/${strTitle.replaceAll(' ', '-')}`,
              query: { CodeId: _id }
            }}
          >
            <h3>{strTitle}</h3>
          </Link>
          <p>{strTextSmall}</p>
        </div>
      </li>
    </Container>
  )
}
