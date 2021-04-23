import React, { FC } from 'react';
import Image from 'next/image';

// Style
import * as S from './imageTextSection.style';

// Type
import ImageTextSectionDataType, { Content } from './imageTextSection.type';

// Components
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';

export interface ImageTextSectionProps {
  data: ImageTextSectionDataType;
}

const ImageTextSection: FC<ImageTextSectionProps> = ({ data }) => {
  console.log({ data });

  function getTextContent(content: Content) {
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
  }

  return (
    <SectionWrapper>
      <S.ImageTextSection>
        <div className="image-text-section__text-wrapper">
          {data.text.content.map((content) => {
            return <>{getTextContent(content)}</>;
          })}
        </div>
        <div className="image-text-section__image-wrapper">
          <Image
            src={`https:${data.image.fields.file.url}`}
            alt={data.image.fields.file.fileName}
            width={data.image.fields.file.details.image.width}
            height={data.image.fields.file.details.image.height}
          />
        </div>
      </S.ImageTextSection>
    </SectionWrapper>
  );
};

export default ImageTextSection;
