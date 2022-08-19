import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Rodape = styled.footer`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: ${colors.black};
  div {
    display: flex;
    align-items: center;
    a {
      svg {
        height: 2.3rem;
        width: 2.3rem;
        color: ${colors.white};
        margin: 0 0.3rem;
      }
    }
  }
`