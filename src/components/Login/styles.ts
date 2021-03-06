import styled from 'styled-components'

export const ContainerLogin = styled.div`
  padding: 5px;
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
export const AlertMessage = styled.div`
  background-color: ${props =>
    props.Type === 'Error' ? props.theme.colors.secundary : 'green'};
  margin: 5px;
  padding: 5px;
  color: #fff;
  text-align: center;
  display: ${props => (props.display ? 'block' : 'none')};
`
