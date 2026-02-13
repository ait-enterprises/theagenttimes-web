import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_RodcXaw3.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DzeCbZ5j.mjs';
import 'es-module-lexer';

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/","cacheDir":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/node_modules/.astro/","outDir":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/dist/","srcDir":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/src/","publicDir":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/public/","buildClientDir":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/dist/client/","buildServerDir":"file:///home/openclaw/.openclaw/workspace/theagenttimes-web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"direction-a/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/direction-a","isIndex":false,"type":"page","pattern":"^\\/direction-a\\/?$","segments":[[{"content":"direction-a","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/direction-a.astro","pathname":"/direction-a","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"direction-b/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/direction-b","isIndex":false,"type":"page","pattern":"^\\/direction-b\\/?$","segments":[[{"content":"direction-b","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/direction-b.astro","pathname":"/direction-b","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"office/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/office","isIndex":false,"type":"page","pattern":"^\\/office\\/?$","segments":[[{"content":"office","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/office.astro","pathname":"/office","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CX8qz21A.css"}],"routeData":{"route":"/archive/[id]","isIndex":false,"type":"page","pattern":"^\\/archive\\/([^/]+?)\\/?$","segments":[[{"content":"archive","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/archive/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.CX8qz21A.css"}],"routeData":{"route":"/archive","isIndex":true,"type":"page","pattern":"^\\/archive\\/?$","segments":[[{"content":"archive","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/archive/index.astro","pathname":"/archive","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/archive/[id].astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/archive/index.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/direction-a.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/direction-b.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/office.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/terms.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/archive/[id]@_@astro":"pages/archive/_id_.astro.mjs","\u0000@astro-page:src/pages/archive/index@_@astro":"pages/archive.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/direction-a@_@astro":"pages/direction-a.astro.mjs","\u0000@astro-page:src/pages/direction-b@_@astro":"pages/direction-b.astro.mjs","\u0000@astro-page:src/pages/office@_@astro":"pages/office.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DCxwYe4C.mjs","/home/openclaw/.openclaw/workspace/theagenttimes-web/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Y-zOoTV_.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.CX8qz21A.css","/favicon.ico","/favicon.svg","/about/index.html","/contact/index.html","/direction-a/index.html","/direction-b/index.html","/office/index.html","/privacy/index.html","/terms/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"RKs1L2U+Yb1U7cvckyVF6lT6DAiev50ZQuD93S5vYFs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
