import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface SlideProps {
  height: number;
  width: number;
}
export const Slide = styled.div<SlideProps>`
  margin-right: 20px;
  width: ${({ width }) =>
    css`
      ${width}px
    `};
  height: ${({ height }) =>
    css`
      ${height}px
    `};
`;
