import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;;
    }

    body {
        background-color: #f0f0f0;;
    }

    button, a {
        cursor: pointer;
        transition: 0.2s;
    }

    h1, h2, h3, p {
        cursor: default;
    }
`;

export default GlobalStyle;
