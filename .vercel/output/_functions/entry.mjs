import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BdFqpd7J.mjs';
import { manifest } from './manifest_DCxwYe4C.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/archive/_id_.astro.mjs');
const _page3 = () => import('./pages/archive.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/direction-a.astro.mjs');
const _page6 = () => import('./pages/direction-b.astro.mjs');
const _page7 = () => import('./pages/office.astro.mjs');
const _page8 = () => import('./pages/privacy.astro.mjs');
const _page9 = () => import('./pages/terms.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/archive/[id].astro", _page2],
    ["src/pages/archive/index.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/direction-a.astro", _page5],
    ["src/pages/direction-b.astro", _page6],
    ["src/pages/office.astro", _page7],
    ["src/pages/privacy.astro", _page8],
    ["src/pages/terms.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a6a7bbbf-6349-4bf6-92e0-eedc54731af4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
