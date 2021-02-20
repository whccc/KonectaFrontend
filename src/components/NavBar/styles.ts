import styled from 'styled-components'

export const Container = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 0px 5px 1px #eee;
`
export const ContainerUser = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & h6 {
    font-size: 13px;
  }
  & img {
    width: 50px;
  }
  & svg {
    font-size: 35px;
    margin-left: 5px;
    color: ${props => props.theme.colors.secundary} !important;
    cursor: pointer;
  }
`
export const ContainerTitle = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & h2 {
    color: ${props => props.theme.colors.secundary};
    width: 50%;
  }
`

export const ContainerNav = styled.div`
  & ul {
    list-style: none;
    padding: 0;
    margin: auto;
    border: 1px solid #eee;
    display: flex;
    flex-direction: row;
    & a {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-left: 30px;
      padding-right: 30px;
      text-decoration: none;
      display: inline-block;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      color: ${props => props.theme.colors.textPrimary};
      font-weight: 600;
      transition: all ease-in-out 0.5s;
      &:hover {
        border: 1px solid ${props => props.theme.colors.secundary};
        color: ${props => props.theme.colors.secundary};
      }
    }
  }
`
