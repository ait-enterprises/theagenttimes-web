import { e as createComponent, n as renderHead, o as renderSlot, r as renderTemplate, h as createAstro } from './astro/server_RodcXaw3.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-5hce7sga> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body class="text-white antialiased grain" data-astro-cid-5hce7sga> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/openclaw/.openclaw/workspace/theagenttimes-web/src/layouts/Base.astro", void 0);

export { $$Base as $ };
