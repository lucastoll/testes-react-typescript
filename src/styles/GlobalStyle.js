import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Open Sans',Helvetica,Arial,Lucida,sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-weight: 600
}

a{
    text-decoration: none;
    &:visited{
        color: inherit;
    }
}

html{
    font-size: 75%
}

@media screen and (min-width: 768px){
    html{
        font-size: 93.75%
    }
}

@media screen and (min-width: 1024px){
    html{
        font-size: 100%
    }
}
`;
