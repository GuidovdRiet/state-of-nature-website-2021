const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  console.log(entries);
  if (entries.items) return entries.items;
}

export async function fetchEntry(entry_id: string) {
  const entry = await client.getEntry(entry_id);
  if (entry) return entry;
}

export default { fetchEntries, fetchEntry };
