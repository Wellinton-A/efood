import { createGlobalStyle } from 'styled-components'

export const colors = {
  bodyBackground: '#FFF8F2',
  heroBackground: '#FFEBD9',
  tagsBackground: '#E66767',
  restCardBackgroud: '#FFFFFF'
}

const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${colors.bodyBackground}
  }
`

export default GlobalStyle
