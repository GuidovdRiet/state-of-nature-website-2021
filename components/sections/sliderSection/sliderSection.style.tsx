import styled from '@emotion/styled';

export const SliderSection = styled.section`
  .slider-section__title-wrapper {
    max-width: ${({ theme }) => theme.breakPoints.extraLarge};
    padding: 0 30px;
    margin: 0 auto;
  }

  .slider-section__title {
    font-size: 7em;
    text-align: left;
  }
`;
