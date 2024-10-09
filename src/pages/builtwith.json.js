// Salidas: /builtwith.json
export const prerender = false;

export async function GET({params, request}) {
    return new Response(
      JSON.stringify({
         url: 'http://localhost:4321/'
      })
    )
  }
