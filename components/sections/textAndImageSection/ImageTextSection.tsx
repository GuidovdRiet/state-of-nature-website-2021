import React, { FC } from 'react';

// Style
import * as S from './imageTextSection.style';

// Type
import ImageTextSectionDataType from './imageTextSection.type';

// Components
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';

export interface ImageTextSectionProps {
  data: ImageTextSectionDataType;
}

const ImageTextSection: FC<ImageTextSectionProps> = ({ data }) => (
  <SectionWrapper>
    <S.ImageTextSection>
      {data.text.content.map((content) => {
        switch (content.nodeType) {
          case 'heading-2':
            return <h2>{content.content[0].value}</h2>;
          case 'heading-3':
            return <h3>{content.content[0].value}</h3>;
          case 'paragraph':
            return <p>{content.content[0].value}</p>;
          default:
            throw new Error(`${content.nodeType} is not defined`);
        }
      })}
    </S.ImageTextSection>
  </SectionWrapper>
);

export default ImageTextSection;
