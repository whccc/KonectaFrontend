import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row-gap;
  }

  & textarea {
    resize: none;
  }
`
export const ContainerImg = styled.div`
  text-align: center;
  & img {
    width: 70%;
    margin-bottom: 10px;
  }
  @media (min-width: 1000px) {
    width: 60%;
  }
`
export const ContainerData = styled.div`
  @media (min-width: 1000px) {
    width: 40%;
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
