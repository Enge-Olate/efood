import styled from "styled-components";
import { breakPoints, colors } from "../../globalStyle";
import type { BannerProps } from "../../types";
export const ImageBanner= styled.div<BannerProps>`
    width: 100%;
    height: 280px;
    display: flex;
    background-image: url(${(props)=> props.imagem});
    background-repeat: no-repeat;
    background-size: cover;
    
    
    `
export const InfoBistro=styled.div`
    margin:0 auto;
    max-width: 1024px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: ${colors.colorFontCream};
    @media(max-width: ${breakPoints.tablet}){
        text-align: center;
    }

`
