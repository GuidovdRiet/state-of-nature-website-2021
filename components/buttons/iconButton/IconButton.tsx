// Vendor
import React, { FC } from 'react';

// Style
import * as S from './iconButton.style';

export interface IconButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  dataTestId?: string;
  disabled?: boolean;
  size?: 'small' | 'normal' | 'large';
  variant?: 'primaryGreen' | 'primaryOrange';
  icon: React.SVGProps<SVGSVGElement>;
}

export const IconButton: FC<IconButtonProps> = ({
  type = 'button',
  onClick,
  dataTestId = 'button',
  variant = 'primaryGreen',
  disabled = false,
  size = 'normal',
  icon,
}) => (
  <S.IconButton
    onClick={onClick}
    variant={variant}
    size={size}
    type={type}
    disabled={disabled}
    data-testid={dataTestId}
  >
    {icon}
  </S.IconButton>
);

export default IconButton;
