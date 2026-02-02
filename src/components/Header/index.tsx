import {
  CenterArea,
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
}
export default function Header({
  variant = "default",
  infoCar,
  text,
  logo,
  title,
}: HeaderProps) {
  return (
    <HeaderStyle variant={variant}>
      {variant === "default" && (
        <>
          <LeftArea>
            <Subtitle>{text}</Subtitle>
          </LeftArea>
          <CenterArea>
            <Link to={"/"}>
              <img src={logo} alt="Logo da empresa." />
            </Link>
          </CenterArea>
          <RightArea>
            <Subtitle>{infoCar}</Subtitle>
          </RightArea>
        </>
      )}
      {variant === "home" && (
        <>
          <Link to={"/perfil"}>
            <img src={logo} alt="Logo da empresa." />
          </Link>
          <Title>{title}</Title>
        </>
      )}
    </HeaderStyle>
  );
}
