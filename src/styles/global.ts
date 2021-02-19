import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,body{
    background-color:${props => props.theme.colors.background};
    color:${props => props.theme.colors.textBlack};
    min-height:100vh;
    position:relative;
  }
`
