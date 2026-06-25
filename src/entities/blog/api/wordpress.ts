const baseURL = `${import.meta.env.WPGRAPHQL_URL}`;

interface WPGraphQLParams {
  query?: string;
  variables?: object;
  headers?: object;
}

export async function wpquery<T = any>({
  query,
  variables = {},
  headers = {},
}: WPGraphQLParams): Promise<T> {
  const authHeaders = {
    Authorization:
      "Basic " +
      btoa(import.meta.env.SECRET_USER + ":" + import.meta.env.SECRET_PASSWORD),
  };
  const res = await fetch(baseURL, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      ...headers,
      ...authHeaders,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  if (!res.ok) {
    return {} as T;
  }
  const { data } = await res.json();
  return data as T;
}
