import styled from 'styled-components'

export const Container = styled.section`
  & img {
    width: 80px;
  }
  td {
    text-align: center;
  }
  svg {
    font-size: 20px;
    margin: 5px;
    color: ${props => props.theme.colors.secundary};
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`
