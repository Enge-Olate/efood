import styled from "styled-components";
import { colors } from "../../globalStyle";

export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    h4{
        margin-bottom: 16px;
    }
   label{
        font-size: 14px;
        font-weight: bold;
        color: ${colors.colorFontCream};
    }
    input{
        padding: 8px;
        height: 32px;
        font-size: 14px;
        color:${colors.fontColorInput};
        background-color: ${colors.backgroundColorInputs};
        border:none;
    }
    #addres-complement{
        margin-bottom: 24px;
    }
    #payment-month, #payment-year{
        margin-bottom: 24px;
    }
    
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        width: 155px;
        display: flex;
        flex-direction: column;
    }
    label{
        margin-bottom: 8px;
    }
    .number_card{
        width: 228px;
        
    }
    .number_cvv{
        width: 87px;
    }
    

`
export const AddressNumber=styled.div`
    
    >div{
        
        display: flex;
        flex-direction: column;
    }
   label{
        width: 100%;
        margin-bottom: 8px;
    }
    
    input{
        max-width: 155px;
        width: 100%;
    }

`
export const NumberCard = styled.div`
    
    label{
        margin-bottom: 8px;
    }
    
    .code_card{
        width: 87px;
        display: flex;
        flex-direction: column;
    }

`