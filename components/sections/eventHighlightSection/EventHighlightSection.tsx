import { isFuture } from 'date-fns';
import React, { ReactElement } from 'react';
import Image, { ImageLoaderProps } from 'next/image';

// Components
import LongArrowRightIcon from '../../media/icons/arrows/LongArrowRightIcon';
import Button from '../../buttons/button/Button';
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';

// Types
import { EventType } from '../../../types/EventType';

// Style
import * as S from './eventHighlightSection.style';

interface EventHighlightSectionProps {
  event: EventType | undefined;
}

export const contentfulLoader = ({ src, quality, width }: ImageLoaderProps) => {
  const params = [`w=${width}`];

  if (quality) {
    params.push(`q=${quality}`);
  }

  return `${src}?${params.join('&')}`;
};

export default function EventHighlightSection({
  event,
}: EventHighlightSectionProps): ReactElement | null {
  if (!event) return null;

  const { fields } = event;
  const isEventInFuture = isFuture(new Date(fields.date));

  return (
    <SectionWrapper>
      <S.EventHighlightSection id="event-highlight-section">
        <div className="event-highlight-section__content-container">
          <div className="event-highlight-section__content-wrapper">
            <h4 className="event-highlight-section__status">
              {isEventInFuture ? 'Volgend evenement' : 'Vorig evenement'}
            </h4>
            <div className="event-highlight-section__title-wrapper">
              <h2 className="event-highlight-section__title">{fields.title}</h2>
            </div>
            <div className="event-highlight-section__button-wrapper">
              <Button
                text={fields.buttonText}
                variant="primaryGreen"
                arrow={<LongArrowRightIcon />}
              />
            </div>
          </div>
          <div className="event-highlight-section__illustration-wrapper">
            <Image
              src={`https:${fields.illustration.fields.file.url}`}
              width={fields.illustration.fields.file.details.image.width}
              height={fields.illustration.fields.file.details.image.height}
              loader={contentfulLoader}
            />
          </div>
        </div>
        <div className="event-highlight-section__image-wrapper">
          <Image
            src={`https:${fields.image.fields.file.url}`}
            width={fields.image.fields.file.details.image.width}
            height={fields.image.fields.file.details.image.height}
            loader={contentfulLoader}
          />
        </div>
      </S.EventHighlightSection>
    </SectionWrapper>
  );
}
