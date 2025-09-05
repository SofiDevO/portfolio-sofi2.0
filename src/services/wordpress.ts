const baseURL = import.meta.env.WPGRAPHQL_URL;
interface WPGraphQLParams {
  query: string;
  variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
  // Check if baseURL is defined before making the request
  if (!baseURL) {
    console.warn('WPGRAPHQL_URL environment variable is not defined');
    return {};
  }
  
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
