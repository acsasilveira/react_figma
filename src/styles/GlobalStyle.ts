import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    background-color: black;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#C7C4BF",
  secondary: "#7e57c2",
  third: "#ffb74d",
  thirdLight: "#ffe9ca",
  white: "#ffffff",
  black: "#000000",
}
