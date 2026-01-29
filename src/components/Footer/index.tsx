import { FooterStyle } from "./style";
import logo from "../../assets/logo.png";
import insta from "../../assets/instagram-round-svgrepo-com (1) 1.png";
import x from "../../assets/x.png";
import face from "../../assets/facebook.png";
export default function Footer() {
    return (
        <FooterStyle>
            <img src={logo} alt="Logo da empresa." />
            <ul>
                <li><img src={insta} alt="Logo Instagram" /></li>
                <li><img src={face} alt="Logo Facebook" /></li>
                <li><img src={x} alt="Logo X" /></li>
            </ul>
            <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </p>
        </FooterStyle>
    );

}