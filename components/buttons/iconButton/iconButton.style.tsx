import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
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
    width: 65px;
    height: 65px;
    svg {
      width: 25px;
    }
  `,
});

interface IconButtonProps {
  size?: 'small' | 'normal' | 'large';
  variant?: 'primaryOrange' | 'primaryGreen';
}

export const IconButton = styled(motion.button)<IconButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  border-radius: 3px;
  position: relative;

  &:focus {
    outline: 0;
  }

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
