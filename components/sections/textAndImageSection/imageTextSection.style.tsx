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
      font-weight: 300;
      font-family: 'Source Sans Pro';
    }
  }
  .image-text-section__button-wrapper {
    display: flex;
    margin-top: 45px;
  }
  .image-text-section__button-wrapper button:first-of-type {
    margin-right: 20px;
  }
  .image-text-section__image-wrapper {
    width: 50%;
    margin: ${({ alignTextLeft }) => (alignTextLeft ? '0 10%' : '0 10% 0 5%')};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${({ theme }) => theme.mediaQueries.extraSmallDown} {
    margin-top: 0;
    margin-bottom: 57px;
    flex-direction: column-reverse;

    .image-text-section__text-wrapper {
      width: 100%;
      margin: 0;
      h2 {
        font-size: 3em;
      }
    }

    .image-text-section__image-wrapper {
      width: 85%;
      margin: 30px;
    }
  }
`;
