import React, { FC } from "react";

import PageWrapper from "../components/wrappers/pageWrapper/PageWrapper";

import { fetchEntry } from "../util/contentfulPosts";

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

const Home: FC<HomeProps> = ({ data }) => (
  <PageWrapper>
    <h1>{data.title}</h1>
  </PageWrapper>
);

export async function getStaticProps() {
  const data = await fetchEntry("6po8NvulhuXrjxMaKp5jIh");
  return {
    props: {
      data: data.fields,
    },
  };
}

export default Home;
