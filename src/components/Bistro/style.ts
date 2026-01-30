import styled from "styled-components";
import { colors } from "../../globalStyle";

export const Card = styled.div`
    width: 472px;
    height: auto;
    margin-top: 80px;
    margin-bottom: 120px;
    background-color: ${colors.bcc};
    position: relative;
    color: ${colors.cft};
    border: 1px solid;
    
    `
    export const TitleBistro = styled.h3`
    font-weight: 700;
    margin-bottom: 16px;
    `
    export const InfoBistro = styled.p`
    max-width:456px;
    width:100%;
    line-height: 22px;
    font-weight: 400px;
    font-size: 14px;
    margin-bottom: 16px;

    `
    export const DivInfos = styled.div`
    padding: 8px;
    div{
        display: flex;
        align-content: center;
        justify-content: space-between;
        text-align: center;
    }
    span{
        font-size:18px;
    }

`