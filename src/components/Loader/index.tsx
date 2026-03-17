import { colors, Container } from "../../globalStyle";
import { ScaleLoader } from "react-spinners";
import { LoaderContainer } from "./style";
type Props={
  title?: string;
}
export default function Loader({title}:Props) {
  return (
    <Container>
      <LoaderContainer>
        <ScaleLoader title={title} color={colors.tomato} speedMultiplier={1} />
      </LoaderContainer>
    </Container>
  );
}
