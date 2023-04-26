import NextHead from 'next/head';
import { FC } from 'react';

const defaultDescription =
  'Krakende takken en pratsj op de benen. Het zit in de natuur van de mens om naar buiten te gaan en te genieten van bos, heuvel, fluitende vogels, zonneschijn en de wind die door de bomen waait. Dit is hetgeen dat het Heuvelland te bieden heeft en waarvan State of Nature denkt dat mensen dit te weinig ervaren.';
const defaultOGURL = 'https://ourstateofnature.com/';
const defaultOGImage = '/OG/SON-OG-default-image.jpg';
const favicon = '/favicon.ico';

interface HeadProps {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const Head: FC<HeadProps> = ({ title, url, description, ogImage }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{`State of Nature - ${title}` || ''}</title>
    <meta name="description" content={description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href={favicon} />
    <meta
      name="keywords"
      content="popup restaurant, restaurant, natuur, state of nature, Zuid-Limburg, HX Hoogcruts, dineren, Heuvelland"
    />
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
