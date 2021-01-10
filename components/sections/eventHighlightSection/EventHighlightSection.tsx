import { isFuture } from 'date-fns';
import React, { ReactElement } from 'react';
import Image from 'next/image';

// Types
import { EventType } from '../../../types/EventType';
import Button from '../../buttons/button/Button';
import SectionWrapper from '../../wrappers/sectionWrapper/SectionWrapper';

// Style
import * as S from './eventHighlightSection.style';

interface EventHighlightSectionProps {
  event: EventType | undefined;
}

export default function EventHighlightSection({
  event,
}: EventHighlightSectionProps): ReactElement | null {
  if (!event) return null;

  const { fields } = event;
  const isEventInFuture = isFuture(new Date(fields.date));

  return (
    <SectionWrapper>
      <S.EventHighlightSection>
        <div className="event-highlight-section__content-container">
          <div className="event-highlight-section__content-wrapper">
            <h4>{isEventInFuture ? 'Volgend evenement' : 'Vorig evenement'}</h4>
            <h2>{fields.title}</h2>
            <Button text={fields.buttonText} variant="primaryGreen" />
          </div>
          <div className="event-highlight-section__illustration-wrapper">
            <Image
              src={`https:${fields.illustration.fields.file.url}`}
              width={fields.illustration.fields.file.details.image.width}
              height={fields.illustration.fields.file.details.image.height}
            />
          </div>
        </div>
        <div className="event-highlight-section__image-wrapper">
          <Image
            src={`https:${fields.image.fields.file.url}`}
            width={fields.image.fields.file.details.image.width}
            height={fields.image.fields.file.details.image.height}
          />
        </div>
      </S.EventHighlightSection>
    </SectionWrapper>
  );
}
