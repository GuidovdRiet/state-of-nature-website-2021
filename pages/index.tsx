import React, { FC } from 'react';
import { compareDesc, isFuture } from 'date-fns';
import { fetchContentType, fetchEntry } from '../util/contentfulPosts';

// Components
import Head from '../components/head';
import Hero from '../components/hero/Hero';
import PageWrapper from '../components/wrappers/pageWrapper/PageWrapper';
import EventHighlightSection from '../components/sections/eventHighlightSection/EventHighlightSection';
import Slider from '../components/sliders/Slider';

// Types
import { EventType } from '../types/EventType';
import { HeroSectionType } from '../types/sectionTypes/HeroSectionType';
import Navigation from '../components/navigation/desktopNavigation/DesktopNavigation';

// Style
import * as S from '../components/sliders/slider.style';

interface HomeProps {
  data: {
    title: string;
    hero: HeroSectionType;
  };
  events: EventType[];
  navigationData: any;
  upcomingEvent: EventType | undefined;
}

const Home: FC<HomeProps> = ({
  data: { title, hero, imageSlider },
  events,
  navigationData,
  upcomingEvent,
}) => (
  <PageWrapper
    head={<Head title={title} />}
    navigation={
      <Navigation
        upcomingEvent={upcomingEvent}
        navigationData={navigationData}
      />
    }
  >
    {hero && <Hero text={hero.fields.heroText.content[0].content} />}
    {<EventHighlightSection event={upcomingEvent || events[0]} />}
    {
      <Slider>
        {imageSlider.fields.slider.map((slide) => (
          <S.Slide
            width={slide.fields.file.details.image.width}
            height={slide.fields.file.details.image.height}
          >
            <img
              src={slide.fields.file.url}
              alt={slide.fields.file.description}
            />
          </S.Slide>
        ))}
      </Slider>
    }
  </PageWrapper>
);

export async function getStaticProps() {
  const data = await fetchEntry('6po8NvulhuXrjxMaKp5jIh');
  const events = await fetchContentType('event');
  const navigationData = await fetchEntry('20WVzXIkln64XWMt29wnZS');
  let upcomingEvent;

  // Check if there is an upcoming event and assign to value: upcomingEvent
  if (events.items.length) {
    upcomingEvent = events.items.find((event: EventType) =>
      isFuture(new Date(event.fields.date))
    );
  }

  // Sort events by latest event
  const sortedEvents = events.items.sort(
    (eventA: EventType, eventB: EventType) =>
      compareDesc(new Date(eventA.fields.date), new Date(eventB.fields.date))
  );

  return {
    props: {
      data: data.fields,
      events: sortedEvents,
      navigationData,
      upcomingEvent: upcomingEvent || null,
    },
  };
}

export default Home;
