import { ButtonLink } from "./style";
type Props ={
    title: string,
    to?: string
}
export default function Button({ title }: Props){
    return(
        <ButtonLink title={title}>
            {title}
        </ButtonLink>
    );
}