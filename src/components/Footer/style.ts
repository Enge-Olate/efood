import styled from "styled-components";
import { colors } from "../../globalStyle";

export const FooterStyle = styled.footer`
    height: 298px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${colors.bcf};

    ul>li{
        display: inline;
        margin-right: 8px;
    }

    p{
        max-width:560px;
        width: 100%;
        line-height: 100%;
        font-size: 10px;
        font-weight: 400;
        text-align: center;
        color: ${colors.cft};
    }
`
