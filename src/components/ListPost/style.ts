import styled from 'styled-components'
export const Container = styled.ul`
  list-style: none;
  padding: 5px;
  margin: 0px;
  background-color: #fff;
  border-top: 1px solid ${props => props.theme.colors.secundary};
  h3 {
    color: ${props => props.theme.colors.secundary};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  & img {
    width: 100px;
  }
  @media (min-width: 1000px) {
    & img {
      height: 200px;
    }
  }
  & p {
    font-size: 13px;
  }
  & li {
    display: flex;
    flex-direction: row;
    & div:nth-child(2) {
      padding: 10px;
    }
  }
  @media (min-width: 1024px) {
    & img {
      width: 100%;
    }
    & li {
      flex-direction: column;
    }
    border-top: none;
    border-bottom: 1px solid ${props => props.theme.colors.secundary};
  }
`
