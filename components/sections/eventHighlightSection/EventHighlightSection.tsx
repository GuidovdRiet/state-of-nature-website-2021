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
  const isEventInFuture = isFuture(new Date(event.fields.date));

  console.log(`https:${event.fields.image.fields.file.url}`);

  return (
    <SectionWrapper>
      <S.EventHighlightSection>
        <div className="event-highlight-section__content-wrapper">
          <span>
            {isEventInFuture ? 'Volgend evenement' : 'Vorig evenement'}
          </span>
          <h2>{event.fields.title}</h2>
          <Button text={event.fields.buttonText} variant="primaryGreen" />
        </div>
        <div className="event-highlight-section__image-wrapper">
          <Image
            src={`https:${event.fields.image.fields.file.url}`}
            width={event.fields.image.fields.file.details.image.width}
            height={event.fields.image.fields.file.details.image.height}
          />
        </div>
      </S.EventHighlightSection>
    </SectionWrapper>
  );
}
