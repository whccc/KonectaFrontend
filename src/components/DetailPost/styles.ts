import styled from 'styled-components'

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`

export const ContainerDataPost = styled.div`
  padding: 10px;
  p:nth-child(4) {
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
    margin-top: 30px;
  }
`
