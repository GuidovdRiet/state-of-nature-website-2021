// Vendor
import React, { FC, SVGProps } from 'react';

// Style
import * as S from './button.style';

export interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'normal' | 'large';
  variant?: 'primaryOrange' | 'primaryGreen';
  text: string;
  icon?: SVGProps<SVGSVGElement>;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  variant = 'primaryOrange',
  size = 'normal',
  text = 'Read more',
  icon,
}) => (
  <S.Button
    onClick={onClick}
    variant={variant}
    size={size}
    type={type}
    // Motion
    whileTap={{ top: 2, boxShadow: 'none', scale: 0.98 }}
    transition={{ duration: 0.01 }}
  >
    {icon && icon}
    {text}
  </S.Button>
);

export default Button;
