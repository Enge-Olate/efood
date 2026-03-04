
import {
  CenterArea,
  ContainerNav,
  HeaderStyle,
  LeftArea,
  RightArea,
  Subtitle,
  Title,
} from "./style";

import { Link } from "react-router-dom";
type HeaderVariant = "home" | "default";
interface HeaderProps {
  variant?: HeaderVariant;
  infoCar?: string;
  text?: string;
  logo: string;
  title?: string;
  Click?: ()=> void;
}
export default function Header({
  variant = "default",
  infoCar,
  text,
  logo,
  title,
  Click,
}: HeaderProps) {
  return (
    <HeaderStyle variant={variant}>
      {variant === "default" && (
        <ContainerNav>
          <LeftArea>
            <Subtitle>{text}</Subtitle>
          </LeftArea>
          <CenterArea>
            <Link to={"/"}>
              <img src={logo} alt="Logo da empresa." />
            </Link>
          </CenterArea>
          <RightArea>
            <Subtitle onClick={Click}>{infoCar}</Subtitle>
          </RightArea>
        </ContainerNav>
      )}
      {variant === "home" && (
        <>
          <Link to={"/"}>
            <img src={logo} alt="Logo da empresa." />
          </Link>
          <Title>{title}</Title>
        </>
      )}
    </HeaderStyle>
  );
}
