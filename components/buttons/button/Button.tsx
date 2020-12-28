// Vendor
import React, { FC, SVGProps } from 'react';

// Style
import * as S from './button.style';

export interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  dataTestId?: string;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
  variant?: 'default' | 'borderless' | 'primary';
  text: string;
  icon?: SVGProps<SVGSVGElement>;
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  onClick,
  dataTestId = 'button',
  variant = 'default',
  disabled = false,
  size = 'normal',
  text = 'Read more',
  icon,
}) => (
  <S.Button
    onClick={onClick}
    variant={variant}
    size={size}
    type={type}
    disabled={disabled}
    data-testid={dataTestId}
  >
    {icon && icon}
    {text}
  </S.Button>
);

export default Button;
