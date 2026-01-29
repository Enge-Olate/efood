import styled from "styled-components";
import hero from "../../assets/hero.png";
import { colors } from "../../globalStyle";
export const HeaderStyle = styled.header`
    width: 100%;
    height: 384px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-image: url(${hero});
    background-repeat: no-repeat;
    background-size: cover;

    
`
export const Title = styled.h1`
    max-width: 700px;
    width:100%;
    font-weight: 900;
    font-size: 36px;
    line-height: 100%;
    color: ${colors.cft};
    text-align: center;
`