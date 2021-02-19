import styled from 'styled-components'

export const Container = styled.section`
  min-height: 100vh;
  h1 {
    text-align: center;
    padding: 10px;
  }
`

export const ContainerPots = styled.section`
  border: 1px solid #eee;
  max-width: 1000px;
  margin: auto;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
