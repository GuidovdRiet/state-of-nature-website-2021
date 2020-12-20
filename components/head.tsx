import React, { FC } from 'react';
import NextHead from 'next/head';

const defaultDescription =
  "Connect to your very own 'State of Nature' and free your mind of obligations. Giving you a taste of Nature’s best tunes and flavors.";
const defaultOGURL = 'https://ourstateofnature.com/';
const defaultOGImage = '/OG/SON-OG-default-image.jpg';

interface HeadProps {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const Head: FC<HeadProps> = ({ title, url, description, ogImage }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title || ''}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={url || defaultOGURL} />
    <meta property="og:title" content={title || ''} />
    <meta
      property="og:description"
      content={description || defaultDescription}
    />
    <meta name="twitter:site" content={url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage || defaultOGImage} />
    <meta property="og:image" content={ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

export default Head;
