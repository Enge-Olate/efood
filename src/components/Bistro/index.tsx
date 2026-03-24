import type { BistroProps } from "../../types";
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

export default function Bistro({
  name,
  image,
  rating,
  description,
  destacado,
  tipo,
  tags,
  id,
}: BistroProps) {
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
        <Button
          to={`/restaurantes/${id}`}
          title="Saiba mais"
          type="link"
          variant="secondary"
        />
      </Content>
    </CardContainer>
  );
}
