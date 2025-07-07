const baseURL = import.meta.env.WPGRAPHQL_URL;
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
