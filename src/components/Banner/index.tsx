import { ImageBanner, InfoBistro } from "./style";
export type Props={
    imagem:string;
    titleGen?:string;
    titleBistro?:string
}

export default function Banner({imagem, titleGen, titleBistro}:Props){

    return(
        <ImageBanner imagem={imagem}>
            <InfoBistro>
                <h2>{titleGen}</h2>
                <h2>{titleBistro}</h2>
            </InfoBistro>
        </ImageBanner>
    );
}