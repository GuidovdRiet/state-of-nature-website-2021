import React from 'react';
import Image from 'next/image';

// Style
import * as S from './imageTextSection.style';

// Type
import ImageTextSectionDataType, { Content } from './imageTextSection.type';

// Components
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';
import Button from '../../buttons/button/Button';

export interface ImageTextSectionProps {
  data: ImageTextSectionDataType;
}

function ImageTextSection({ data }: ImageTextSectionProps) {
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
      <S.ImageTextSection alignTextLeft={data.alignTextLeft}>
        <div className="image-text-section__text-wrapper">
          {data.text.content.map((content: Content) => (
            <>{getTextContent(content)}</>
          ))}
        </div>
        <div className="image-text-section__image-wrapper">
          <Image
            src={`https:${data.image.fields.file.url}`}
            alt={data.image.fields.file.fileName}
            width={data.image.fields.file.details.image.width}
            height={data.image.fields.file.details.image.height}
          />
        </div>
        <div className="image-text-section__button-wrapper">
          <Button type="button" text="Tickets" />
          <Button type="button" text="Tickets" />
        </div>
      </S.ImageTextSection>
    </SectionWrapper>
  );
}

export default ImageTextSection;
