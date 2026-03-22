import styled from "styled-components";
import { breakPoints } from "../../globalStyle";

export const ContainerListBistro = styled.section`
    display: grid;
    padding: 80px 0px;
    grid-template-columns: 1fr 1fr;
    gap: 48px 80px;
    
    @media (max-width: ${breakPoints.mobile}){
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 28px;
    }
    @media(max-width: ${breakPoints.tablet}){
        gap: 28px 30px;
    }
    @media(max-width: ${breakPoints.desktop}){
        gap: 28px 30px;
    }

`
