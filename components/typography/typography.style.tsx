import styled from '@emotion/styled';
import { variant } from 'styled-system';
import { css } from '@emotion/react';

interface TypographyProps {
  variant: string;
}

export const Typography = styled.section<TypographyProps>`
  ${variant({
    variants: {
      small: css`
        font-size: 1.4rem;
      `,
      medium: css`
        font-size: 2.4rem;
      `,
      large: css`
        font-size: 3.4rem;
      `,
      extraLarge: css`
        font-size: 3.4rem;
      `,
      big: css`
        font-size: 4.4rem;
      `,
    },
  })};
`;
