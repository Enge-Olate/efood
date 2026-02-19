import { ButtonContainer, ButtonLink } from "./style";
type Props ={
    title: string;
    to?: string;
    type: 'button'|'link'| 'submit';
    variant?:'primary'|'secondary';
    onClick?:()=>void;

}
export default function Button({ title, to, type, variant='primary', onClick}: Props){
    if(type === "link" && to){
        return(
        <ButtonLink onClick={onClick}  to={to as string} title={title} variant={variant}>
            {title}
        </ButtonLink>
    );
    }
    return(
        <ButtonContainer type={type === 'link'? 'button': type}  title={title} variant={variant} onClick={onClick}>
            {title}
        </ButtonContainer>
    )
}