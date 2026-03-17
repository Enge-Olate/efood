import styled from "styled-components";
import { colors } from "../../globalStyle";

export const ErrorContainer = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 16px;
        font-weight: bold;
        color: ${colors.colorFontTomato};
    }
`