import styled, { createGlobalStyle } from "styled-components";

export const colors = {
    bcm: "#FFF8F2",
    bcf: "#FFEBD9",
    cft: "#E66767",
    bcc: "#ffffff",
    bcbl: "#E66767"
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
        background-color: ${colors.bcm};
    }
`
export const Container = styled.main`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakPoints.mobile}) {
        max-width: 80%;
    }
    
`

