import styled from "styled-components"
import { breakPoints, colors } from "../../globalStyle"

export const FooterContainer = styled.footer`
    background-color: ${colors.bcf}; /* Cor bege mais escura dos seus estilos */
    padding: 40px 0;
    margin-top: 80px; /* Espaço entre as pizzas e o footer */
    width: 100%;
`

export const FooterContent = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: ${breakPoints.tablet}) {
        padding: 0 16px;
    }
`

export const SocialLinks = styled.div`
    display: flex;
    gap: 8px;
    margin: 32px 0 80px; /* Espaço entre logo, ícones e o texto final */
`

export const FooterText = styled.p`
    font-size: 10px;
    color: ${colors.cft};
    max-width: 480px; /* Limita o texto para não ficar uma linha gigante no desktop */
    line-height: 1.2;
`