import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0 40px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  :root {
    --primary-color-0: #060707;
    --primary-color-1: #fcc944;
    --primary-color-2: #fff;

    --secondary-color-0: #dddddd;

    --error-color-0: #ff3333;

    --font-weight-0: 200;
    --font-weight-1: 300;
    --font-weight-2: 400;
    --font-weight-3: 500;
    --font-weight-4: 600;
    
    --font-size-0: 16px;

    --border-radius-0: 8px;
    --border-radius-1: 50px;

  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const PageWrapper = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
`
