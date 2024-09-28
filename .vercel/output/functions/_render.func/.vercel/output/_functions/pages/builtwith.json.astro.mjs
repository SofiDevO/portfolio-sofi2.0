export { renderers } from '../renderers.mjs';

// Salidas: /builtwith.json
async function GET({params, request}) {
    return new Response(
      JSON.stringify({
         url: 'http://localhost:4321/'
      })
    )
  }

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
