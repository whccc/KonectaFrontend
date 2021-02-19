import styled from 'styled-components'
export const Container = styled.div`
  margin: 10px;
  @media (min-width: 1024px) {
    width: calc(33.33% - 20px);
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
