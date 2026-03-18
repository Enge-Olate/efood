import styled from "styled-components";
import { colors } from "../../globalStyle";

export const CartContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: end;
    position: fixed;
    top:0;
    left: 0;
    z-index: 1;
    &.is-open{
        display: flex;
        z-index: 999;
    }    
`
export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.black};
    opacity: .7;
    position: absolute;
    top:0;
    left: 0;
    
`
export const Sidebar = styled.aside`
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    background-color: ${colors.tomato};
    z-index: 1;
    >div{
        margin-top:40px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size:.875rem;
        font-weight: 700;
        color: ${colors.colorFontCream};
    }
    button{
        max-width: 100vw;
    }
    ul{

        overflow-y: auto;
    }
    .emptyCart{
        
        font-size: .875rem;
        font-weight: 400;
        color: ${colors.colorFontCream};
    }
    
`
export const CartProduct = styled.li`
    padding: 8px;
    margin-bottom: 16px;
    width: 344px;
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
    }
    

`