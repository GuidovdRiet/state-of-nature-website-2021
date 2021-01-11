import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SlideProps {
  height: boolean;
  width: boolean;
}

export const Slide = styled.div<SlideProps>`
  width: ${({ width }) =>
    css`
      ${width}px
    `};
  height: ${({ height }) =>
    css`
      ${height}px
    `};
`;
