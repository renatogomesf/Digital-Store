import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    *{
        margin: 0px;
        padding: 0px;

        font-family: "Inter", sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;
    }
`