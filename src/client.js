import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "1cqzrjog",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});