import { colors, Container } from "../../globalStyle";
import { ScaleLoader } from "react-spinners";
import { LoaderContainer } from "./style";

export default function Loader({title}:LoaderProps) {
  return (
    <Container>
      <LoaderContainer>
        <ScaleLoader title={title} color={colors.tomato} speedMultiplier={1} />
      </LoaderContainer>
    </Container>
  );
}
