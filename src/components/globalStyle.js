import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;700&display=swap');
@import url('https://unpkg.com/ress/dist/ress.min.css');

    html{
        font-family: 'Open Sans', sans-serif;
        color:#191919;
        font-weight:300;
        margin:0;
        padding:0
    }
    *{
        margin:0;
        padding:0
    }
    body{
        margin:0;
        padding:0 
    }
`;

export default GlobalStyle;
