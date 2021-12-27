import React, { ReactNode } from 'react';

// style
import * as S from './slider.style';

export default function SimpleSlider({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  const flickityOptions = {
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    groupCells: 4,
  };

  return (
    <S.SliderWrapper options={flickityOptions}>{children}</S.SliderWrapper>
  );
}
