// const baseURL = import.meta.env.WPGRAPHQL_URL;
const baseURL = "https://blog-sofi.api-wordpress.tech/graphql";

interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  const res = await fetch(baseURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  if (!res.ok) {
    console.log(res);
    return {};
  }
  const { data } = await res.json();
  return data;
}
