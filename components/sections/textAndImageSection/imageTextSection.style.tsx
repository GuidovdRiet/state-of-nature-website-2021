import styled from '@emotion/styled';

interface ImageTextSectionProps {
  alignTextLeft: boolean;
}

export const ImageTextSection = styled.div<ImageTextSectionProps>`
  margin-top: 100px;
  display: flex;
  flex-direction: ${({ alignTextLeft }) =>
    alignTextLeft ? 'row' : 'row-reverse'};
  align-items: center;
  .image-text-section__text-wrapper {
    width: 40%;
    margin: ${({ alignTextLeft }) =>
      alignTextLeft ? '0 0 0 60px' : '0 60px 0 0'};
    h2 {
      font-size: 3.8em;
    }
    h3 {
      font-size: 2em;
      font-weight: 100;
      font-family: 'Source Sans Pro';
    }
    p {
      font-size: 1.4em;
      font-weight: 100;
      line-height: 23px;
    }
  }
  .image-text-section__image-wrapper {
    width: 50%;
    margin: ${({ alignTextLeft }) => (alignTextLeft ? '0 10%' : '0 10% 0 0')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
