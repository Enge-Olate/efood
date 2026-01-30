import { Container } from '../../globalStyle';
import Button from '../Button';
import * as S from './style';

type RestaurantProps = {
    name: string;
    rating: number;
    description: string;
    image: string;
    tags: string[];
}

export default function Bistro({ name, rating, description, image, tags }: RestaurantProps) {
    return (
        <Container>
            <S.CardContainer>
                <S.ImageWrapper>
                    <img src={image} alt={name} />
                    <S.TagContainer>
                        {tags.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)}
                    </S.TagContainer>
                </S.ImageWrapper>

                <S.Content>
                    <S.Header>
                        <h3>{name}</h3>
                        <S.Rating>{rating} ⭐</S.Rating>
                    </S.Header>
                    <p>{description}</p>
                    <Button />
                </S.Content>
            </S.CardContainer>
        </Container>
    );
};