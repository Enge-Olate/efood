import logo from "../../assets/logo.png";
import insta from "../../assets/instagram-round-svgrepo-com (1) 1.png";
import x from "../../assets/x.png";
import face from "../../assets/facebook.png";
import {
  FooterContainer,
  FooterContent,
  FooterText,
  SocialLinks,
} from "./style";
export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <img src={logo} alt="Logo da empresa." />
        <SocialLinks>
          <a href="#">
            <img src={insta} alt="Logo Instagram" />
          </a>
          <a href="#">
            <img src={face} alt="Logo Facebook" />
          </a>
          <a href="#">
            <img src={x} alt="Logo X" />
          </a>
        </SocialLinks>
        <FooterText>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.{" "}
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
