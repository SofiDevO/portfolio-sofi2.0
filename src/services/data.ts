// Define a variable 'url' that will be used for the API request.
/**
   ** If we are in a development environment (local), use the localUrl constant.
    ** If we are NOT in development (production), use the 'url' constant.
    *!This is important because if you dont change variables, you will be fetching the wrong data and wont be able to see the changes you made. Also if you dont change back to false, you will be fetching the wrong data and wont be able to see the changes you made in production.
   */


// const url = localUrl ?  localUrl : SITE_URL;

const localUrl = import.meta.env.LOCAL_URL;
const url = import.meta.env.SITE_URL

console.log(localUrl, url)

// Create an async function that takes an optional 'dataType' argument.
// By default, 'dataType' is "data" if no other value is provided.
/**
 *! Important. WHEN WE ARE IN A LOCAL DEVELOPMENT ENVIRONMENT, 'local' MUST BE SET TO TRUE. BEFORE MAKING A COMMIT, IT MUST BE CHANGED BACK TO FALSE.
 */
export async function getData(
  dataType: string = "data",
  local: boolean = false
) {
  const siteUrl = !local ? url : localUrl;

  // Check if siteUrl is defined before making the request
  if (!siteUrl) {
    console.warn(`${!local ? 'SITE_URL' : 'LOCAL_URL'} environment variable is not defined`);
    return null;
  }

  // If the value of 'dataType' is not "data", use it as the endpoint; otherwise, the endpoint will be "all".
  // This decides which part of the API to call.
  const endpoint = dataType !== "data" ? dataType : "all";
  try {
    // Make a request to the API using the 'fetch' function.
    // Construct the URL with the value of 'url' and the endpoint.
    const res = await fetch(`${siteUrl}/api/${endpoint}`);
    // Check if the response is successful before converting it to JSON.
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }
    // Wait for the response to be converted to JSON.
    const data = await res.json();
    // Return the data that corresponds to the requested data type ('dataType').
    return data[dataType];
  } catch (error) {
    console.error(`Failed to fetch ${dataType} from ${url}:`, error);
    return null;
  }
}