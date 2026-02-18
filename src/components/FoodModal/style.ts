import styled from "styled-components";
import { colors } from "../../globalStyle";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.bcbt};
    header{
        padding-bottom: 8px;
        display: flex;
        position: relative;
    }
    header > img{
        position: absolute;
        display: block;
        right: -8px;
        top:8px;
        object-fit: cover;
    }
    
    `
export const ModalContent=styled.div`

    padding: 32px;
    display: flex;
    gap:24px;
    >img{
        width: 280px;
        height: 280px;
        object-fit: cover;
    }

`
export const ModalInfo=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    max-width: 656px;
    font-size: 14px;

`