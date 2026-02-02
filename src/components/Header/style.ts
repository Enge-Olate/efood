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
    `
            : css`
            height: 186px;
            padding: 0 171px;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
    `}
    @media (max-width: ${breakPoints.mobile}){
        ${({ variant }) =>
        variant === 'default' && css`
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            justify-content: space-around;
        `

    }
    }
    
`
export const Title = styled.h1`
    max-width: 700px;
    width:100%;
    font-weight: 900;
    font-size: 36px;
    line-height: 100%;
    color: ${colors.cft};
    text-align: center;
    @media (max-width: ${breakPoints.mobile}){font-size: 24px;}
`
export const Subtitle = styled.h3`
    font-weight: 900;
    color: ${colors.cft};
`

// Estilo para o header default


export const LeftArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const CenterArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center; 
`;

export const RightArea = styled.div`
  width: 256px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;






