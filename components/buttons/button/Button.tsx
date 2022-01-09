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
  arrow?: SVGProps<SVGSVGElement>;
  icon?: SVGProps<SVGSVGElement> | HTMLElement;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  variant = 'primaryOrange',
  size = 'normal',
  text = 'Meer info',
  arrow,
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
    hasArrow={!!arrow}
  >
    {icon && icon}
    {text}
    {arrow && <div className="button__arrow-icon-wrapper">{arrow}</div>}
  </S.Button>
);

export default Button;
