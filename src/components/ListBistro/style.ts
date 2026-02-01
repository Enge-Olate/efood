import styled from "styled-components";
import { breakPoints } from "../../globalStyle";

export const ContainerListBistro = styled.div`
    width: fit-content;
    margin-top: 80px;
    margin-bottom: 120px;
    

`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    
    @media (max-width: ${breakPoints.mobile}){
        display: grid;
        grid-template-columns: 1fr;
        gap: 28px;
    }

`