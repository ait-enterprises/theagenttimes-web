/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, g as addAttribute } from '../chunks/astro/server_RodcXaw3.mjs';
import 'piccolore';
import { $ as $$Base } from '../chunks/Base_D--14wn3.mjs';
import { $ as $$Nav, a as $$Footer } from '../chunks/Footer_73igaGHi.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let issues = [];
  let fetchError = null;
  try {
    const { supabase } = await import('../chunks/supabase_B6ZWh78E.mjs');
    const { data, error } = await supabase.from("newsletter_issues").select("*").eq("status", "sent").order("created_at", { ascending: false });
    if (error) {
      console.error("Supabase error:", JSON.stringify(error));
      fetchError = error.message;
    }
    issues = data || [];
  } catch (e) {
    console.error("Archive fetch error:", e.message, e.stack);
    fetchError = e.message;
  }
  const featured = issues[0] || null;
  const older = issues.slice(1) || [];
  function stripHtml(html) {
    return html?.replace(/<[^>]*>/g, "").replace(/&[^;]+;/g, " ") || "";
  }
  function formatDate(d) {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Archives \u2014 The Agent Times" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<section class="py-24 relative"> <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-cobalt-500/5 rounded-full blur-[150px]"></div> <div class="max-w-7xl mx-auto px-8 relative z-10"> <div class="inline-flex items-center gap-3 mb-6"> <span class="w-12 h-[1px] bg-golden-500"></span> <span class="font-mono text-xs text-golden-500 tracking-[0.25em] uppercase">The Archives</span> </div> <h1 class="font-editorial text-5xl md:text-7xl font-bold leading-[0.95] mb-6">Every Issue,<br>Preserved.</h1> <p class="text-gray-400 text-lg max-w-xl mb-16">The complete record of our AI-generated intelligence briefs. Browse, read, and catch up on what you missed.</p> ${!issues || issues.length === 0 ? renderTemplate`<div class="bg-white/[0.02] border border-white/[0.06] rounded-lg p-16 text-center"> <div class="font-mono text-xs text-golden-500 tracking-[0.2em] uppercase mb-4">Coming Soon</div> <h2 class="font-editorial text-3xl font-bold mb-4">The presses are warming up.</h2> <p class="text-gray-500 max-w-md mx-auto">Our first issue is being crafted by the newsroom. Subscribe to be the first to read it.</p> </div>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${featured && renderTemplate`<a${addAttribute(`/archive/${featured.id}`, "href")} class="block group mb-12"> <div class="relative bg-white/[0.02] border border-white/[0.06] rounded-lg p-10 md:p-14 hover:border-cobalt-500/30 transition-all duration-300"> <div class="absolute top-6 right-6 font-mono text-[10px] text-golden-500 tracking-wider">LATEST ISSUE</div> <div class="font-mono text-xs text-gray-600 mb-4">
Issue #${featured.issue_number} · ${formatDate(featured.created_at)} </div> <h2 class="font-editorial text-3xl md:text-5xl font-bold leading-[1.05] mb-4 group-hover:text-cobalt-300 transition-colors"> ${featured.title || `Issue #${featured.issue_number}`} </h2> <p class="text-gray-500 text-lg leading-relaxed max-w-3xl mb-6"> ${stripHtml(featured.content_html || featured.content_markdown || "").slice(0, 250)}...
</p> <span class="inline-flex items-center gap-2 text-cobalt-400 font-semibold group-hover:text-cobalt-300 transition-colors">
Read full issue <span class="group-hover:translate-x-1 transition-transform">→</span> </span> </div> </a>`}${older.length > 0 && renderTemplate`<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${older.map((issue) => renderTemplate`<a${addAttribute(`/archive/${issue.id}`, "href")} class="group bg-white/[0.02] border border-white/[0.06] rounded-lg p-8 hover:border-cobalt-500/30 transition-all duration-300 hover:-translate-y-1"> <div class="font-mono text-xs text-gray-600 mb-3">
Issue #${issue.issue_number} · ${formatDate(issue.created_at)} </div> <h3 class="font-editorial text-xl font-bold mb-3 group-hover:text-cobalt-300 transition-colors leading-snug"> ${issue.title || `Issue #${issue.issue_number}`} </h3> <p class="text-gray-500 text-sm leading-relaxed"> ${stripHtml(issue.content_html || issue.content_markdown || "").slice(0, 150)}...
</p> </a>`)} </div>`}` })}`} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/archive/index.astro", void 0);

const $$file = "/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/archive/index.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
