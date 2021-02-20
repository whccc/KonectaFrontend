import styled, { keyframes } from 'styled-components'
const rotate = keyframes`
  0% {
    transform: scale(1);
  }
  50%{
    transform: scale(1.1);
  }
  100% {

    transform: scale(1);
  }
`

export const ContainerUsers = styled.section`
  max-width: 1000px;
  margin: auto;
  position: relative;
  border: 1px solid red;
`
export const Container = styled.section`
  h2 {
    text-align: center;
    padding: 10px;
  }
`

export const Button = styled.button`
  border: none;
  position: fixed;
  padding: 10px;
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 100%;
  bottom: 20px;
  right: 20px;
  animation: ${rotate} 1.5s infinite;
  & svg {
    color: #fff;
  }
  &:hover {
    opacity: 0.8;
  }
`
