import React, { FC } from 'react';
import { compareDesc, isFuture } from 'date-fns';
import { fetchContentType, fetchEntry } from '../util/contentfulPosts';

// Components
import Head from '../components/head';
import Hero from '../components/hero/Hero';
import PageWrapper from '../components/wrappers/pageWrapper/PageWrapper';
import EventHighlightSection from '../components/sections/eventHighlightSection/EventHighlightSection';
import SliderSection from '../components/sections/sliderSection/SliderSection';
import ImageTextSection from '../components/sections/textAndImageSection/ImageTextSection';
import Footer from '../components/sections/footer/Footer';

// Types
import { EventType } from '../types/EventType';
import { HeroSectionType } from '../types/sectionTypes/HeroSectionType';
import Navigation from '../components/navigation/desktopNavigation/DesktopNavigation';

interface HomeProps {
  data: {
    title: string;
    hero: HeroSectionType;
    imageSlider: any;
    textAndImage: any;
    textAndImage2: any;
    contact: any;
  };
  events: EventType[];
  navigationData: any;
  upcomingEvent: EventType | undefined;
}

const Home: FC<HomeProps> = ({
  data: { title, hero, imageSlider, textAndImage, textAndImage2, contact },
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
    <EventHighlightSection event={upcomingEvent || events[0]} />
    <SliderSection imageSlider={imageSlider} />
    <ImageTextSection data={textAndImage.fields} />
    <ImageTextSection data={textAndImage2.fields} />
    <Footer />
  </PageWrapper>
);

// 

export async function getStaticProps() {
  const data = await fetchEntry('6po8NvulhuXrjxMaKp5jIh');
  const buttonData = await fetchEntry(
    data.fields.textAndImage2.fields.button.sys.id
  );
  const buttonDataSecond = await fetchEntry(
    data.fields.textAndImage2.fields.button_second.sys.id
  );
  data.fields.textAndImage2.fields.button = buttonData;
  data.fields.textAndImage2.fields.button_second = buttonDataSecond;

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
