import React from 'react';

// Style
import * as S from './typography.style';

export interface TypographyProps {
  variant: string;
}

const Typography: React.FC<TypographyProps> = ({ children, variant }) => (
  <S.Typography variant={variant}>{children}</S.Typography>
);

export default Typography;
