// Definimos una variable 'url' que se usará para la solicitud a la API.
// Si estamos en un entorno de desarrollo (local), usamos 'http://localhost:4322'.
// Si no estamos en desarrollo (producción), usamos 'import.meta.env.SITE_URL'.

const url = import.meta.env.SITE_URL
  ? import.meta.env.SITE_URL
  : `${window.location.origin}`;

// Creamos una función asíncrona que toma un argumento opcional 'dataType'.
// Por defecto, 'dataType' es "data" si no se proporciona otro valor.
export async function getData(dataType: string = "data") {
  // Si el valor de 'dataType' no es "data", lo usamos como endpoint; de lo contrario, el endpoint será "all".
  // Esto decide a qué parte de la API llamar.
  const endpoint = dataType !== "data" ? dataType : "all";
  try {
    // Hacemos una solicitud a la API usando la función 'fetch'.
    // Se construye la URL con el valor de 'url' y el endpoint.
    const res = await fetch(`${url}/api/${endpoint}`);
    // Verificamos si la respuesta es exitosa antes de convertirla en JSON.
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }
    // Esperamos a que la respuesta se convierta en JSON.
    const data = await res.json();
    // Devolvemos los datos que corresponden al tipo de datos solicitado ('dataType').
    return data[dataType];
  } catch (error) {
    console.error(`Failed to fetch ${dataType} from ${url}:`, error);
    return null;
  }
}
