import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CJ5Zltcn.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bs5k37d1.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>about</h1> ` })}`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/about.astro", void 0);

const $$file = "/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
