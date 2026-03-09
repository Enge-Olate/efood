import styled from "styled-components";
import { breakPoints, colors } from "../../globalStyle";

export const ContainerProduct = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
    padding-top: 56px;
    color: ${colors.branca};
    padding-bottom: 120px;
    @media (max-width: ${breakPoints.tablet}){
        grid-template-columns: 1fr;
        justify-items: center;
        padding: 16px;
    }
    @media (min-width: ${breakPoints.tablet}) {
        grid-template-columns:repeat(3, 1fr);
        justify-items: center;
        column-gap: 24px;
    }    
   
`
export const CardProduct=styled.div`
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    background-color: ${colors.tomato};
    color: ${colors.colorFontCream};

    h4{
        margin: 8px 0;
        font-weight: 900;
    }
    p{
        margin-bottom:8px;
        font-size: 14px;
        font-weight:400;
    }
    button{
        padding: 4px;
        color: ${colors.colorFontTomato};
        background-color: ${colors.branca};
    }  
    img{
        height: 167px;
        object-fit: cover;
    }
    @media(max-width: ${breakPoints.mobile}){
        p{
            font-size: 12px;
        }
    }
`

