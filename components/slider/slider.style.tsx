import styled from '@emotion/styled';
import Flickity from 'react-flickity-component';

export const SliderWrapper = styled(Flickity)`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;

  .flickity-viewport {
    display: grid;
  }

  .flickity-slider {
    display: flex;
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.extraSmallDown} {
    img {
      width: 60%;
    }
  }
`;
