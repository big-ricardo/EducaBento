import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    height: auto !important;
  }

  body {
    background:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-family: 'Roboto', 'Philosopher', BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-variant: none;
    line-height: inherit;
    font-feature-settings: none;
    height: auto !important;
  }

  h1,h2,h3,h4,h5,h6{
    margin-top: inherit;
    margin-bottom: initial;
    color: initial;
    font-weight: initial;
  }

  a {
    text-decoration: none;
    font-family: 'Roboto' 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  h1.title{
    font-family: 'Philosopher', sans-serif;
    text-align:center;
     font-size: clamp(20px, 3vh + 10px, 34px);
    margin-top: 60px;
    margin-bottom: 40px;
    color: ${props => props.theme.colors.text}
  }

`
