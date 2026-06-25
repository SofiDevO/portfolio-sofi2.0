const localUrl = import.meta.env.LOCAL_URL;
const url = import.meta.env.SITE_URL;

/**
 * Fetches data from the site's own API endpoints.
 * Uses LOCAL_URL in development, SITE_URL in production.
 * @param dataType - the API endpoint segment (defaults to "all")
 * @param local - force use of LOCAL_URL
 */
export async function getData(
  dataType: string = "data",
  local: boolean = false
): Promise<Record<string, unknown> | null> {
  const siteUrl = !local ? url : localUrl;

  if (!siteUrl) {
    console.warn(
      `${!local ? "SITE_URL" : "LOCAL_URL"} environment variable is not defined`
    );
    return null;
  }

  const endpoint = dataType !== "data" ? dataType : "all";

  try {
    const res = await fetch(`${siteUrl}/api/${endpoint}`);
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }
    const data = await res.json();
    return data[dataType];
  } catch (error) {
    console.error(`Failed to fetch ${dataType} from ${url}:`, error);
    return null;
  }
}
