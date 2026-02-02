import styled from "styled-components";
import type { Props } from ".";
export const ImageBanner= styled.div<Props>`
    width: 100%;
    height: 280px;
    background-image: url(${(props)=> props.imagem});
    background-repeat: no-repeat;
    background-size: contain;
`