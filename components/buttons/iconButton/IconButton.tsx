// Vendor
import React, { FC } from 'react';

// Style
import * as S from './iconButton.style';

export interface IconButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'normal' | 'large';
  variant?: 'primaryGreen' | 'primaryOrange';
  icon: React.SVGProps<SVGSVGElement>;
}

export const IconButton: FC<IconButtonProps> = ({
  type = 'button',
  onClick,
  variant = 'primaryGreen',
  size = 'normal',
  icon,
}) => (
  <S.IconButton
    onClick={onClick}
    variant={variant}
    size={size}
    type={type}
    // Motion
    whileTap={{ top: 2, boxShadow: 'none', scale: 0.98 }}
    transition={{ duration: 0.01 }}
  >
    {icon}
  </S.IconButton>
);

export default IconButton;
