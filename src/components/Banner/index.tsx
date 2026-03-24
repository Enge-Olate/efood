import type { BannerProps } from "../../types";
import { ImageBanner, InfoBistro } from "./style";

export default function Banner({ imagem, titleGen, titleBistro }: BannerProps) {
  return (
    <ImageBanner imagem={imagem}>
      <InfoBistro>
        <h2>{titleGen}</h2>
        <h2>{titleBistro}</h2>
      </InfoBistro>
    </ImageBanner>
  );
}
