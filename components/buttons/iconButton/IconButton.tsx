// Vendor
import React, { FC } from 'react';

// Style
import * as S from './iconButton.style';

export interface IconButtonProps {
  /** OnClick handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Data Test ID is needed for Jest */
  dataTestId?: string;
  /** Enable disabled state of the button */
  disabled?: boolean;
  /** The size of the button */
  size?: 'small' | 'normal' | 'large' | 'compact';
  /** Different color variants of the button */
  variant?: 'default' | 'borderless' | 'primary';
  /** Border radius shape */
  border?: 'square' | 'rounded';
  /** Expects a SVG icon as it's child */
  icon: React.SVGProps<SVGSVGElement>;
}

export const IconButton: FC<IconButtonProps> = ({
  type = 'button',
  onClick,
  dataTestId = 'button',
  variant = 'default',
  border = 'square',
  disabled = false,
  size = 'normal',
  icon,
}) => (
  <S.IconButton
    onClick={onClick}
    variant={variant}
    border={border}
    size={size}
    type={type}
    disabled={disabled}
    data-testid={dataTestId}
  >
    {icon}
  </S.IconButton>
);

export default IconButton;
