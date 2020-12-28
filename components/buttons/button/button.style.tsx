import { darken } from 'polished';
import { variant } from 'styled-system';
import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const colorVariants = (theme: Theme) => ({
  primaryOrange: css``,
  primaryGreen: css``,
});

const sizeVariants = () => ({
  small: css`
    font-size: 0.7em;
    padding: 7px 10px;
    svg {
      width: 13px;
    }
  `,
  normal: css`
    font-size: 1em;
    padding: 9px 25px;
    svg {
      width: 16px;
    }
  `,
  large: css`
    font-size: 1.4em;
    padding: 15px 30px;
    svg {
      width: 19px;
    }
  `,
});

interface ButtonProps {
  size?: 'small' | 'normal' | 'large';
  variant?: 'default' | 'borderless' | 'primary';
}

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s ease;
  display: flex;
  align-items: center;
  border-radius: 5px;

  /* Color variants */
  ${({ theme }) =>
    variant({
      variants: colorVariants(theme),
    })}

  /* Size variants */
  ${variant({
    prop: 'size',
    variants: sizeVariants(),
  })}

  &:focus {
    outline: 0;
  }

  svg {
    margin-right: 5px;
  }
`;
