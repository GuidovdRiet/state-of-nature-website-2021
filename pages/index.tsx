import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";

import { fetchEntries, fetchEntry } from "../util/contentfulPosts";

const Home = ({ data }) => (
  <div>
    <h1>{data.title}</h1>
    <Head title={`${data.title} | State of Nature`} />
    <Nav />
  </div>
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
