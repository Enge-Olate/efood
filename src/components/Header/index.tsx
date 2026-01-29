import { HeaderStyle, Title } from "./style";
import logo from "../../assets/logo.png";
export default function Header(){
    return(
        <HeaderStyle>
            <img src={logo} alt="Logo da empresa."/>
            <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
        </HeaderStyle>
    )
}