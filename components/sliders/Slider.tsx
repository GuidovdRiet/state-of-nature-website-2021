import React, { ReactNode } from 'react';
import Slider from 'react-slick';

// style
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: 'linear',
    variableWidth: true,
  };

  return <Slider {...settings}>{children}</Slider>;
}
