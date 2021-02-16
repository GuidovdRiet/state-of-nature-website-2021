const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// Example app: https://the-example-app-nodejs.contentful.com/courses/hello-sdks/lessons/serve-localized-content?space_id=dm2dn92i8yc0&delivery_token=d578a5194cdf294db8c44ba5087820aa8cecb0343f330e779698ca57918d186c&preview_token=fbc58b1c2b6e0417a3043e66ab087459aa02de474aeb197049eed055e03a47df&editorial_features=enabled&api=cpa
// Docs: https://contentful.github.io/contentful.js/contentful/8.1.7/ContentfulClientAPI.html
const client = require('contentful').createClient({
  space,
  accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries({ locale: 'nl' });
  if (entries.items) return entries.items;
}

export async function fetchEntry(entryId: string) {
  const entry = await client.getEntry(entryId, { locale: 'nl' });
  if (entry) return entry;
}

export async function fetchContentType(contentType: string) {
  const entry = await client.getEntries(
    {
      content_type: contentType,
    },
    { locale: 'nl' }
  );
  if (entry) return entry;
}

export default { fetchEntries, fetchEntry };
