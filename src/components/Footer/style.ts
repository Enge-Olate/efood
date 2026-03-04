import styled from "styled-components"
import { breakPoints, colors } from "../../globalStyle"

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 40px 0;
    margin-top: 80px; 
    background-color: ${colors.colorFontCream};
`

export const FooterContent = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: ${breakPoints.tablet}) {
        padding: 0 16px;
    }
`

export const SocialLinks = styled.div`
    display: flex;
    gap: 8px;
    margin: 32.5px 0 80px; 
`

export const FooterText = styled.p`
    max-width: 550px; 
    margin-bottom: 40px;
    font-size: 10px;
    font-weight: 400;
    color: ${colors.colorFontTomato};
    line-height: 100%;

`