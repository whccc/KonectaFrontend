import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const ContainerCP = styled.div`
  border-radius: 10px;
  width: 300px;
  box-shadow: 0px 0px 5px #000;
  padding: 10px;
  background-color: ${props => props.theme.colors.primary};
  text-align: 'center';
  & a {
    color: ${props => props.theme.colors.secundary} !important;
    font-weight: bold;
    &.active {
      background-color: ${props => props.theme.colors.secundary} !important;
      color: ${props => props.theme.colors.textSecundary} !important;
    }
  }
`
