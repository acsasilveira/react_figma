import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.white};
    font-weight: 500;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.white};
    border: 0.2rem solid ${colors.white};
    border-radius: 1rem;
    padding: 1.5rem;
    label {
      background-color: ${colors.white};
      color: ${colors.black};
    }
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.primary};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        background-color: ${colors.white};
        color: ${colors.black};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      color: ${colors.black};
      background-color: ${colors.white};
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        background-color: ${colors.white};
        font-weight: bold;
      }
    }
  }
`