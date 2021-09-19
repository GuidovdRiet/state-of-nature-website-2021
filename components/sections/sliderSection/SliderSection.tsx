import React from 'react';
import Image from 'next/image';

// Components
import Slider from '../../slider/Slider';
import Slide from '../../slider/slide/Slide';

// Style
import * as S from './sliderSection.style';
import { contentfulLoader } from '../eventHighlightSection/EventHighlightSection';

interface SliderSectionProps {
  imageSlider: any;
}

const SliderSection: React.FC<SliderSectionProps> = ({ imageSlider }) => (
  <S.SliderSection id="slider-section">
    <div className="slider-section__title-wrapper">
      <h3 className="slider-section__title">Een kijkje over de heuvels… </h3>
    </div>
    <Slider>
      {imageSlider.fields.slider.map((slide: any) => (
        <Slide
          width={slide.fields.file.details.image.width}
          height={slide.fields.file.details.image.height}
        >
          <Image
            src={`https:${slide.fields.file.url}`}
            alt={slide.fields.file.description}
            width={slide.fields.file.details.image.width}
            height={slide.fields.file.details.image.height}
            loader={contentfulLoader}
          />
        </Slide>
      ))}
    </Slider>
  </S.SliderSection>
);

export default SliderSection;
