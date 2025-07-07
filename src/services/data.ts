const localUrl = import.meta.env.LOCAL_URL;
const url = import.meta.env.SITE

console.log( localUrl, url)
export async function getData(
  dataType: string = "data",
  local: boolean = false
) {
  const siteUrl = !local ? url : localUrl;
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
