import React, { FC } from "react";
import Head from "../components/head";
import Hero from "../components/hero/Hero";

import PageWrapper from "../components/wrappers/pageWrapper/PageWrapper";

import { fetchContentType, fetchEntry } from "../util/contentfulPosts";

interface HomeProps {
  data: {
    title: string;
    hero: {
      sys: {
        space: { sys: { type: string; linkType: string; id: string } };
        id: "3URHfBqXqwnnEciSZHwo9Z";
        type: string;
        createdAt: string;
        updatedAt: string;
        environment: {
          sys: { id: string; type: string; linkType: string };
        };
        revision: number;
        contentType: {
          sys: { type: string; linkType: string; id: string };
        };
        locale: string;
      };
      fields: { title: string };
    };
    event: {
      labelText: string;
      title: string;
      description: {};
      image: {};
      date: string;
      location: {};
      buttonText: string;
    };
  };
}

const Home: FC<HomeProps> = ({ data: { title, hero, event } }) => {
  return (
    <PageWrapper head={<Head title={title} />}>
      {hero && (
        <Hero>
          <h1>{hero.fields.title}</h1>
        </Hero>
      )}
    </PageWrapper>
  );
};

export async function getStaticProps() {
  const data = await fetchEntry("6po8NvulhuXrjxMaKp5jIh");
  const events = await fetchContentType("event");

  return {
    props: {
      data: data.fields,
    },
  };
}

export default Home;
