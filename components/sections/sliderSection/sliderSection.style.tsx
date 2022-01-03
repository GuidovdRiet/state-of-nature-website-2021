import styled from '@emotion/styled';
import { breakpoints } from '../../../style/theme';

export const SliderSection = styled.section`
  .slider-section__title-wrapper {
    max-width: ${`${breakpoints.extraLarge}px`};
    padding: 0 30px;
    margin: 0 auto;
  }

  .slider-section__title {
    font-size: 7em;
    text-align: left;
  }
`;
