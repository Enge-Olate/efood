import { Container } from "../../globalStyle";
import { ErrorContainer } from "./style";
type Props ={
    title:string;
}
export default function Fail({title}: Props){
    return(
        <Container>
            <ErrorContainer title={title}>
                <h3>{title}</h3>
            </ErrorContainer>
        </Container>
    );
}