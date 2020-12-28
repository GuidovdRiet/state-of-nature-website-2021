import { darken } from 'polished';
import { variant } from 'styled-system';
import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const colorVariants = (theme: Theme) => ({
  primaryOrange: css`
    background-color: ${theme.colors.primaryOrange};
    box-shadow: 0 3px 0 0 ${darken(0.18, theme.colors.primaryOrange)};
  `,
  primaryGreen: css`
    background-color: ${theme.colors.primaryGreen};
    box-shadow: 0 3px 0 0 ${darken(0.13, theme.colors.primaryGreen)};
  `,
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
    font-size: 2.2em;
    padding: 7px 21px;
    svg {
      width: 16px;
    }
  `,
  large: css`
    font-size: 1.4em;
    padding: 30px 45px;
    svg {
      width: 19px;
    }
  `,
});

interface ButtonProps {
  size?: 'small' | 'normal' | 'large';
  variant?: 'primaryOrange' | 'primaryGreen';
}

export const Button = styled.button<ButtonProps>`
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Londrina Solid';
  font-weight: 300;
  ${({ theme }) => theme.helpers.fontSmoothing};
  position: relative;
  transform: translate3d(0px, 0px 0px);

  &:hover {
    transform: translate3d(0px, 3px, 0px);
    box-shadow: none;
  }

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
