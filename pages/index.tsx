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
  upcomingEvent: EventType | undefined;
}

const Home: FC<HomeProps> = ({
  data: { title, hero },
  events,
  upcomingEvent,
}) => (
  <PageWrapper
    navigation={<Navigation upcomingEvent={upcomingEvent} />}
    head={<Head title={title} />}
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
  const navigation = await fetchContentType('20WVzXIkln64XWMt29wnZS');
  let upcomingEvent = null;

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
      navigation,
      upcomingEvent: upcomingEvent || null,
    },
  };
}

export default Home;
