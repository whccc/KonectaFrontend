import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`

export const ContainerDataPost = styled.div`
  padding: 10px;
  p:nth-child(5) {
    color: ${props => props.theme.colors.secundary} !important;
    font-family: cursive;
  }
  @media (min-width: 1024px) {
    width: 80%;
  }
`

export const ContainerNewPost = styled.div`
  & h4 {
    padding: 15px;
  }
  @media (min-width: 1024px) {
    width: 30%;
    margin-top: 50px;
  }
`
export const ContainerLike = styled.div`
  display: flex;
  flex-direction: row;
  & svg {
    font-size: 30px;
    &:hover {
      opacity: 0.8;
    }
  }
  small {
    font-weight: bold;
    margin-top: 10px;
    display: block;
  }
  cursor: pointer;
`
export const ContainerComments = styled.div`
  & textarea {
    resize: none;
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

export const AlertMessage = styled.div`
  background-color: ${props =>
    props.Type === 'Error' ? props.theme.colors.secundary : 'green'};
  margin: 5px;
  padding: 5px;
  color: #fff;
  text-align: center;
  display: ${props => (props.display ? 'block' : 'none')};
`
