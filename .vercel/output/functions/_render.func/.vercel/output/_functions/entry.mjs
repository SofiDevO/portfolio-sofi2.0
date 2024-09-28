import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DC6CokKx.mjs';
import { manifest } from './manifest_CiExG21T.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/email-sender.astro.mjs');
const _page3 = () => import('./pages/api/_datatype_.astro.mjs');
const _page4 = () => import('./pages/builtwith.json.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/email-sender.ts", _page2],
    ["src/pages/api/[dataType].ts", _page3],
    ["src/pages/builtwith.json.js", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e667b098-55ed-43a1-8979-22af0564c4d3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
