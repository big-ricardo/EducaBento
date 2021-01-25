/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: String,
    colors: {
      text: string,
      background: string,
      link: string
    },
    text: String,
    primary: String
  }
}
