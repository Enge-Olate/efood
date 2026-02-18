import styled from "styled-components";
import { colors } from "../../globalStyle";

export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.bcbt};
    header{
        position: relative;
        display: flex;
    }
    header > img{
        position: absolute;
        display: block;
        right: 8px;
        top:8px;
        object-fit: cover;
        cursor: pointer;
    }
    .overlay{
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.75);
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
    color: ${colors.bcc};
    font-size: 14px;
    
    p{
        line-height: 22px;
        font-weight: 400;
    }
    button{
        
        width: fit-content;
    }

`