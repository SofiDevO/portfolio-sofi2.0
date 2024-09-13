// Salidas: /builtwith.json
export async function GET({params, request}) {
    return new Response(
      JSON.stringify({
         url: 'http://localhost:4321/'
      })
    )
  }