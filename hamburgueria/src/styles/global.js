import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root  {
        --cor-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --gray-100:  #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0:#F5F5F5;
    }

    body {
        background-color: #FFFFFF;
    }

    h1, h2, h3, h4, h5, h6, p, span ,div, button, input{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        font-family: 'Inter', sans-serif;
    }

    ul,li{
        list-style: none
    }
`;
