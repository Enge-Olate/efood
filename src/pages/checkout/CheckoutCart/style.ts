import styled from "styled-components";
import { breakPoints, colors } from "../../../globalStyle";

export const CartProduct = styled.li`
    padding: 8px;
    margin-bottom: 16px;
    width: 100%;
    height: 100px;
    display: flex;
    position: relative;
    background-color: ${colors.orangePale};
    img{
        margin-right: 8px;
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
    div{
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: ${colors.colorFontTomato};
        h4{
            font-weight: 900;
        }
        p{
            font-size: .875rem;
            font-weight: 400;
        }
        
    }
    img:last-child{
            width: 16px;
            height: 16px;
            position: absolute;
            top:76px;
            left: 320px;
            cursor: pointer;
            @media(max-width:${breakPoints.mobile}){
                left: 232px;
            }
    }
    

`
export const InfoValue=styled.div`
    margin:40px 0 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${colors.colorFontCream};
    h4{
        font-weight: 900;
    }
    p{
        font-size: .875rem;
        font-weight: 400;
    }
`