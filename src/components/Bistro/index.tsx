import { Link } from "react-router-dom";
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

type RestaurantProps = {
  name: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

export default function Bistro({
  name,
  rating,
  description,
  image,
  tags,
}: RestaurantProps) {
  return (
    <CardContainer>
      <ImageWrapper>
        <img src={image} alt={name} />
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagContainer>
      </ImageWrapper>

      <Content>
        <Header>
          <h3>{name}</h3>
          <Rating>{rating} ⭐</Rating>
        </Header>
        <p>{description}</p>
        <Link to={"/perfil"}>
          <Button title="Saiba mais" />
        </Link>
      </Content>
    </CardContainer>
  );
}
