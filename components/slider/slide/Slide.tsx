import React, { ReactNode } from 'react';

// Style
import * as S from './slide.style';

interface SlideProps {
  key: string;
  width: number;
  height: number;
  children: ReactNode[] | ReactNode;
}

const Slide: React.FC<SlideProps> = ({ width, height, children }) => (
  <S.Slide width={width} height={height}>
    {children}
  </S.Slide>
);

export default Slide;
