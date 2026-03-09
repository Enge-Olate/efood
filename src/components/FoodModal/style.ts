import styled, { keyframes } from "styled-components";
import { breakPoints, colors } from "../../globalStyle";
const fadeIn = keyframes`
    from{opacity:0;}
    to{opacity:1;}
`
const scaleUp = keyframes`
    from{
        opacity: 0;
        transform: scale(0.9) translateY(20px);
    }
    to{
        opacity: 1;
        transform: scale(1) translateY(0);
    }
`
export const Modal = styled.div`
    padding: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    z-index: 999;
    animation: ${fadeIn} 0.3s ease-in-out forwards;
    
`
export const ModalContent=styled.div`
    max-width: 1024px;
    width: 100%;
    padding: 32px;
    display: flex;
    background-color: ${colors.tomato};
    position: relative;
    animation: ${scaleUp} 0.3s ease-in-out forwards;
    >img{
        width: 280px;
        height: 280px;
        object-fit: cover;
    }
    header{
        img{
            position: absolute;
            top:8px;
            right: 8px;
            cursor:pointer
        }
    }
    @media (max-width: ${breakPoints.mobile}) {
        padding: 16px;
        max-height: 90vh;
        flex-direction: column;
        overflow-y: auto;
        >img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            margin-top: 16px;
        }
    }
    
`
export const ModalInfo=styled.div`
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: ${colors.branca};
    font-size: 14px;
    @media (max-width: ${breakPoints.mobile}) {
            margin: 0 ;
            font-size: 12px;
            text-align: center;
            gap: 5px;
        }
    p{
        line-height: 22px;
        font-weight: 400;
        
    }
    button{
        
        width: fit-content;
        @media (max-width: ${breakPoints.mobile}) {
            width: 100%;
        }
    }

`