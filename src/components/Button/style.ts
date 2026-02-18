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
    background-color: ${(props)=> props.variant === "primary"? colors.bcm: colors.bcbt};
    color: ${(props)=> props.variant === "primary"? colors.cft: colors.bcf};
    width: ${(props)=> props.variant === "primary"?  '304px':'fit-content'};
    text-align: ${(props)=> props.variant === "primary"? 'center': ''};

`
export const ButtonLink = styled(Link) <Props>`
    ${CommonStyles}
   
    
`
export const ButtonContainer = styled.button<Props>`
    ${CommonStyles}
    
    
`