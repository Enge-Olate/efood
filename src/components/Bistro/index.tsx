import Button from "../Button";

import {
  CardContainer,
  Content,
  Header,
  ImageWrapper,
  Rating,
  Tag,
  TagContainer,
} from "./style";

type Props = {
  name: string;
  image: string;
  rating: number;
  description: string;
  destacado?: boolean;
  tipo: string;
  tags:string[];
}
export default function Bistro({
  name,
  image,
  rating,
  description,
  destacado,
  tipo,
  tags
}: Props) {
  return (
    <CardContainer>
      <ImageWrapper>
        <img src={image} alt={name} />
        <TagContainer>
          {destacado && <Tag>{tags}</Tag>}
          <Tag>{tipo}</Tag>
        </TagContainer>
      </ImageWrapper>

      <Content>
        <Header>
          <h3>{name}</h3>
          <Rating>{rating} ⭐</Rating>
        </Header>
        <p>{description}</p>
        <Button to={"/perfil"} title="Saiba mais" type="link" variant="secondary"/>
      </Content>
    </CardContainer>
  );
}
