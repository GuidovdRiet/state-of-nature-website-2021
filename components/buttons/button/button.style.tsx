import { darken } from 'polished';
import { variant } from 'styled-system';
import styled from '@emotion/styled';
import { Theme, css } from '@emotion/react';

export const colorVariants = (theme: Theme) => ({
  primaryOrange: css`
    background-color: ${theme.colors.primaryOrange};
  `,
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
  transition: transform 0.1s ease;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Londrina Solid';
  font-weight: 300;
  ${({ theme }) => theme.helpers.fontSmoothing};

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
