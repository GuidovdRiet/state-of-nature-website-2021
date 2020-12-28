import React, { FC } from 'react';
import { isFuture } from 'date-fns';

import { fetchContentType, fetchEntry } from '../util/contentfulPosts';
// Components
import Head from '../components/head';
import Hero from '../components/hero/Hero';
import PageWrapper from '../components/wrappers/pageWrapper/PageWrapper';

// Types
import { EventType } from '../types/EventType';
import { HeroSectionType } from '../types/sectionTypes/HeroSectionType';
import Navigation from '../components/navigation/Navigation';

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
  data: { title, hero },
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
    {hero && (
      <Hero>
        <h1>{hero.fields.title}</h1>
      </Hero>
    )}
  </PageWrapper>
);

export async function getStaticProps() {
  const data = await fetchEntry('6po8NvulhuXrjxMaKp5jIh');
  const events = await fetchContentType('event');
  const navigationData = await fetchEntry('20WVzXIkln64XWMt29wnZS');
  let upcomingEvent;

  // Check if there are is an upcoming event
  if (events.items.length) {
    upcomingEvent = events.items.find((event: EventType) =>
      isFuture(new Date(event.fields.date))
    );
  }

  return {
    props: {
      data: data.fields,
      events: events.items,
      navigationData,
      upcomingEvent: upcomingEvent || null,
    },
  };
}

export default Home;
