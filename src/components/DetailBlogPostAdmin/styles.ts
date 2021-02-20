import styled from 'styled-components'

export const Container = styled.div`
  & img {
    width: 100px;
  }
  & td {
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

export const Button = styled.button`
  background-color: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colors.textSecundary};
  padding: 5px;
  border: 2px solid transparent;
  margin-top: 5px;
  transition: all ease-in-out 0.5s;
  font-weight: bold;
  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.secundary};
    border: 2px solid ${props => props.theme.colors.secundary};
  }
`
