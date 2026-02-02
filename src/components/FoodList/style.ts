import styled from "styled-components";
import { colors } from "../../globalStyle";

export const ContainerProduct = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;
    padding-top: 56px;
    color: ${colors.bcc};
    padding-bottom: 120px;

`
export const CardProduct=styled.div`
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: rgb(230, 103, 103);
    color: rgb(255, 235, 217);

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
        color: ${colors.cft};
        background-color: ${colors.bcc};
    }  

`

