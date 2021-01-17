import React, { ReactNode } from 'react';
import Slider from 'react-slick';

// style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './slider.style';

export default function SimpleSlider({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: 'linear',
    variableWidth: true,
    focusOnSelect: true,
  };

  return (
    <S.SliderWrapper>
      <Slider {...settings}>{children}</Slider>
    </S.SliderWrapper>
  );
}
