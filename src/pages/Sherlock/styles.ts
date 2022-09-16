import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5rem;
        margin-top: 3rem;
        margin-left: 5rem;
        h1{
            color: ${colors.white};
            margin-right: 15rem;
        }
    }
    div img {
        width: 50%;
    }

`