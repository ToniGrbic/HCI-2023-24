import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "3lnqdekh",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_TOKEN,
});

