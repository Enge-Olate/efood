import styled, { createGlobalStyle } from "styled-components";

export const colors = {
    orangePale: "#fff8f2",
    colorFontCream: "#FFEBD9",
    colorFontTomato: "#E66767",
    branca: "#ffffff",
    tomato: "#E66767",
    black: "#000000",
}
export const breakPoints = {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
}
export const RootGlobalStyle = createGlobalStyle`
    *, a{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
        text-decoration: none;
    }
    body{
        width: 100%;
        margin: 0 auto;
        background-color: ${colors.orangePale};
        
    }
`
export const Container = styled.main`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    
    
    
`

