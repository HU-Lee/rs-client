import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props: ThemeProps) => props.theme.bgColor};
    color: ${(props: ThemeProps) => props.theme.titleColor};
    transition: all 0.50s linear;
  }
`