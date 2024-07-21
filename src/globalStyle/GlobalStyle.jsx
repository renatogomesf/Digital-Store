import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    *{
        margin: 0px;
        padding: 0px;

        font-family: "Inter", sans-serif;
        text-decoration: none;
    }

    body{
        height: 100vh;
        background-color: #f9f8fe;
    }

    ::-webkit-scrollbar{
        background-color: ${({theme})=>theme.light_gray_2};
        width: 10px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({theme})=>theme.primary};
        border-radius: 5px;
    }

    .teste{
        height: 681px;
        background-color: ${({theme})=>theme.light_gray_3};

    }
`