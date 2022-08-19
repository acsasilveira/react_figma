import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabecalho = styled.header`
  display: flex;
  picture img {
    border left: 10rem;
    height: 8rem;
    width: 6rem;
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h1 {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: ${colors.white};
    }
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.2em;
          color: ${colors.white};
        }
      }
    }
  }
`