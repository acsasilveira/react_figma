import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  body{
    background-color: black;
  }
`
export const colors = {
  primary: "#C7C4BF",
  secondary: "#7e57c2",
  third: "#ffb74d",
  thirdLight: "#ffe9ca",
  white: "#ffffff",
  black: "#000000",
  danger: "#660000",
  success: "#50BA9E",
}
