import { ButtonContainer, ButtonLink } from "./style";
type Props ={
    title: string;
    to?: string;
    type: 'button'|'link';
    variant?:'primary'|'secondary';
    onclick?:()=>void;

}
export default function Button({ title, to, type, variant='primary', onclick}: Props){
    if(type === "link"){
        return(
        <ButtonLink onClick={onclick}  to={to as string} title={title} type={type} variant={variant}>
            {title}
        </ButtonLink>
    );
    }
    return(
        <ButtonContainer  title={title} variant={variant} onClick={onclick}>
            {title}
        </ButtonContainer>
    )
}