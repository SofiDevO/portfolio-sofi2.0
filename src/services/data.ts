const url = "http://localhost:4321" || import.meta.env.SITE

export async function getData(dataType: string = "data") {
    const endpoint = dataType !== "data" ? dataType : "all"
    const res = await fetch(`${url}/api/${endpoint}`)
    const data = await res.json()
    return data[dataType]
}