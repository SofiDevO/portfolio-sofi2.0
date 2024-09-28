import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bs9SZHul.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_CJ5Zltcn.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sofidev/laboratorio/portfolio-sofi2.0/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BOnzuLtn.js"}],"styles":[{"type":"external","src":"/_astro/about.BT7557sr.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/email-sender","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/email-sender\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"email-sender","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/email-sender.ts","pathname":"/api/email-sender","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/[datatype]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"dataType","dynamic":true,"spread":false}]],"params":["dataType"],"component":"src/pages/api/[dataType].ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/builtwith.json","isIndex":false,"type":"endpoint","pattern":"^\\/builtwith\\.json\\/?$","segments":[[{"content":"builtwith.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/builtwith.json.js","pathname":"/builtwith.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://portfolio-sofi2-0.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/builtwith.json@_@js":"pages/builtwith.json.astro.mjs","\u0000@astro-page:src/pages/api/email-sender@_@ts":"pages/api/email-sender.astro.mjs","\u0000@astro-page:src/pages/api/[dataType]@_@ts":"pages/api/_datatype_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/sofidev/laboratorio/portfolio-sofi2.0/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astrojs-manifest":"manifest_B7HR11jY.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BOnzuLtn.js","@astrojs/react/client.js":"_astro/client.B-MJstjg.js","/astro/hoisted.js?q=0":"_astro/hoisted.B7mxEgrW.js","@src/components/molecules/GithubCalendar/Calendar":"_astro/Calendar.1kyfZPa3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.BT7557sr.css","/robots.txt","/_astro/Calendar.1kyfZPa3.js","/_astro/LanguageFlag.astro_astro_type_script_index_0_lang.BnP4WC8V.js","/_astro/client.B-MJstjg.js","/_astro/hoisted.B7mxEgrW.js","/_astro/hoisted.BOnzuLtn.js","/_astro/index.CqAYE0DX.js","/docs/Angela_Sofia_Osorio_CV2024_updated.pdf","/img/about-sofi.jpeg","/img/atomic-design.webp","/img/cuadriculaDifuminada.png","/img/funkoSofi.png","/img/portadaLIVE.webp","/img/sofi-pic-1.webp","/img/sofi-pic-2.webp","/img/sofi-selfie.webp","/img/icons/DiscordLogo.svg","/img/icons/btn-play.svg","/img/icons/cuadricula.svg","/img/icons/sofi-icon.webp","/img/icons/youtube.svg","/img/loaders/loadcat.gif","/img/icons/skills/astro.svg","/img/icons/skills/css-color.svg","/img/icons/skills/file-type-html.svg","/img/icons/skills/javascript-color.svg","/img/icons/skills/nodejs-dark (1).svg","/img/icons/skills/nodejs-dark.svg","/img/icons/skills/react-dark.svg","/img/icons/skills/sass.svg","/img/icons/skills/styledcomponents.svg","/img/icons/skills/ubuntu.svg","/img/icons/skills/vue.svg","/img/icons/skills/wordpress.svg","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"8x9zU9PWmrs+B2su42MfjPHCPCVVAV03KMVtENcx18U=","experimentalEnvGetSecretEnabled":true});

export { manifest };
