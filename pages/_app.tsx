import React,{useState} from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import themes from '../styles/themes'
import DefaultTheme from '../styles/styled'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [theme, setTheme] = useState(themes.light)

  const ToggleTheme = () =>{
    setTheme(theme.title === '0' ? themes.dark : themes.light)
  }

  return (

     <ThemeProvider theme={theme}>
         <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
