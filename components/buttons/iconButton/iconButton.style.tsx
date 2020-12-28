import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

import { colorVariants } from '../button/button.style';

const sizeVariants = () => ({
  small: css`
    padding: 7px;
    svg {
      width: 13px;
    }
  `,
  normal: css`
    padding: 9px;
    svg {
      width: 16px;
    }
  `,
  large: css`
    font-size: 1.4em;
    padding: 15px;
    svg {
      width: 19px;
    }
  `,
});

interface IconButtonProps {
  size?: 'small' | 'normal' | 'large';
  variant?: 'default' | 'borderless' | 'primary';
}

export const IconButton = styled.button<IconButtonProps>`
  cursor: pointer;
  transition: background-color 0.1s ease;
  display: flex;
  align-items: center;
  border-radius: 5px;

  /* Size variants */
  ${variant({
    prop: 'size',
    variants: sizeVariants(),
  })}

  /* Color variants */
    ${({ theme }) =>
    variant({
      variants: colorVariants(theme),
    })}
`;
