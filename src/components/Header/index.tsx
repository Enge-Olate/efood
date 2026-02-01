import { HeaderStyle, Title } from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderStyle>
      <Link to={"/"}>
        <img src={logo} alt="Logo da empresa." />
      </Link>
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </HeaderStyle>
  );
}
