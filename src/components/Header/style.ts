import styled, { css } from "styled-components";
import hero from "../../assets/hero.png";
import { breakPoints, colors } from "../../globalStyle";

type HeaderVariant = 'home' | 'default';
interface HeaderProps {
    variant: HeaderVariant;
}
export const HeaderStyle = styled.header<HeaderProps>`
    width: 100%;
    display: flex;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;
    
    
    ${({ variant }) =>
        variant === 'home' ? css`
        height: 384px;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        @media(max-width: ${breakPoints.tablet}){
            height: 250px;
            justify-content: space-evenly;

        }
    `
            : css`
            height: 186px;
            display: flex;
            @media(max-width: ${breakPoints.tablet}){
               flex-direction: column;
               justify-content: space-around;
                
             }        
    `}
        
`
export const Title = styled.h1`
    max-width: 700px;
    width:100%;
    font-weight: 900;
    font-size: 36px;
    line-height: 100%;
    color: ${colors.colorFontTomato};
    text-align: center;
    @media (max-width: ${breakPoints.mobile}){font-size: 24px;}
`
export const Subtitle = styled.h3`
    font-weight: 900;
    cursor: pointer;
    color: ${colors.colorFontTomato};
`

// Estilo para o header default

export const ContainerNav=styled.div`
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    display: flex;
    align-items:center;
    @media(max-width: ${breakPoints.tablet}){
        flex-direction: column;
    }
`
export const LeftArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  
`;

export const CenterArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
  @media(max-width: ${breakPoints.tablet}){
            width:auto ;
            margin-top:8px;
    }
`;

export const RightArea = styled.div`
  width: 256px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
   @media(max-width: ${breakPoints.tablet}){
            width:auto ;
            margin-top:8px;
    }
`;






