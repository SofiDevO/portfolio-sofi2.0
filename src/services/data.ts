
// Definimos una variable 'url' que se usará para la solicitud a la API.
// Si 'http://localhost:4322' está disponible, se usa como valor; si no, se usa 'import.meta.env.SITE'.
// 'import.meta.env.SITE' es útil en entornos de producción donde el valor de la URL puede variar.
const url = "http://localhost:4322" || import.meta.env.SITE_URL

// Creamos una función asíncrona que toma un argumento opcional 'dataType'.
// Por defecto, 'dataType' es "data" si no se proporciona otro valor.
export async function getData(dataType: string = "data") {

    // Si el valor de 'dataType' no es "data", lo usamos como endpoint; de lo contrario, el endpoint será "all".
    // Esto decide a qué parte de la API llamar.
    const endpoint = dataType !== "data" ? dataType : "all"

    // Hacemos una solicitud a la API usando la función 'fetch'.
    // Se construye la URL con el valor de 'url' y el endpoint.
    const res = await fetch(`${url}/api/${endpoint}`)

    // Esperamos a que la respuesta se convierta en JSON.
    const data = await res.json()

    // Devolvemos los datos que corresponden al tipo de datos solicitado ('dataType').
    // 'data[dataType]' extrae la parte específica de la respuesta que necesitamos.
    return data[dataType]
}
