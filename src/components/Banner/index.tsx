import { ImageBanner } from "./style";
export type Props={
    imagem:string;
}
export default function Banner({imagem}:Props){

    return(
        <ImageBanner imagem={imagem}>
        </ImageBanner>
    );
}