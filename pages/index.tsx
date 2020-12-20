import React, { FC } from 'react';
import { fetchContentType, fetchEntry } from '../util/contentfulPosts';

// Components
import Head from '../components/head';
import Hero from '../components/hero/Hero';
import PageWrapper from '../components/wrappers/pageWrapper/PageWrapper';

// Types
import { EventType } from '../types/EventType';
import { HeroSectionType } from '../types/sectionTypes/HeroSectionType';

interface HomeProps {
  data: {
    title: string;
    hero: HeroSectionType;
  };
  events: EventType[];
}

const Home: FC<HomeProps> = ({ data: { title, hero }, events }) => (
  <PageWrapper head={<Head title={title} />}>
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

  return {
    props: {
      data: data.fields,
      events,
      navigation,
    },
  };
}

export default Home;
