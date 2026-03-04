import styled, { css } from "styled-components";
import { colors } from "../../globalStyle";
import { Link } from "react-router-dom";
type Props = {
    variant?: 'primary' | 'secondary';
    
}

const CommonStyles =css<Props>`
    padding: 4px 6px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s ease;
    border: none;
    text-align: center;

    /* Lógica de cores */   
    background-color: ${(props)=> props.variant === "primary"? colors.orangePale: colors.tomato};
    color: ${(props)=> props.variant === "primary"? colors.colorFontTomato: colors.colorFontCream};

    /* Lógica de largura */
    width: ${(props)=> props.variant === "primary"? '100%': 'fit-content'};
    max-width: ${(props)=> props.variant === "primary"? '304px': 'none'};
    &:hover{
        filter: brightness(1.2);
        transform: translateY(-1px);
    }
    &:active{
        transform: translateX(0);
    }
`
export const ButtonLink = styled(Link) <Props>`
    ${CommonStyles}
   
    
`
export const ButtonContainer = styled.button<Props>`
    ${CommonStyles}
    
    
`