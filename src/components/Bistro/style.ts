import styled from 'styled-components';
import { colors } from '../../globalStyle';

export const CardContainer = styled.article`
  background: ${colors.bcc};
  max-width: 472px;
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 217px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`;

export const Tag = styled.span`
  background-color: ${colors.cft};
  color: ${colors.bcf};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
`;

export const Content = styled.div`
  padding: 8px;
  color: ${colors.cft};
  border: 1px solid #E66767;  
  border-top-color:transparent;
  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const Rating = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

