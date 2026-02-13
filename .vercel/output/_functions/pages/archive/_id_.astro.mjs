/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, u as unescapeHTML, g as addAttribute } from '../../chunks/astro/server_RodcXaw3.mjs';
import 'piccolore';
import { $ as $$Base } from '../../chunks/Base_D--14wn3.mjs';
import { $ as $$Nav, a as $$Footer } from '../../chunks/Footer_73igaGHi.mjs';
import { s as supabase } from '../../chunks/supabase_OCodwUKY.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { data: issue } = await supabase.from("newsletter_issues").select("*").eq("id", id).single();
  if (!issue) {
    return Astro2.redirect("/archive");
  }
  const { data: allIssues } = await supabase.from("newsletter_issues").select("id, issue_number, title").eq("status", "sent").order("created_at", { ascending: false });
  const currentIdx = allIssues?.findIndex((i) => i.id === id) ?? -1;
  const prev = currentIdx >= 0 && currentIdx < (allIssues?.length ?? 0) - 1 ? allIssues[currentIdx + 1] : null;
  const next = currentIdx > 0 ? allIssues[currentIdx - 1] : null;
  function formatDate(d) {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  const content = issue.content_html || issue.content_markdown || "";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${issue.title || "Issue #" + issue.issue_number} \u2014 The Agent Times` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<article class="py-24 relative"> <div class="absolute -top-32 right-0 w-[400px] h-[400px] bg-cobalt-500/5 rounded-full blur-[150px]"></div> <div class="max-w-3xl mx-auto px-8 relative z-10"> <!-- Back link --> <a href="/archive" class="inline-flex items-center gap-2 text-gray-500 hover:text-cobalt-400 text-sm mb-10 transition-colors">
← Back to Archives
</a> <!-- Header --> <div class="mb-12"> <div class="font-mono text-xs text-golden-500 tracking-wide mb-4">
Issue #${issue.issue_number} · ${formatDate(issue.created_at)} </div> <h1 class="font-editorial text-4xl md:text-5xl font-bold leading-[1.05] mb-6"> ${issue.title || `Issue #${issue.issue_number}`} </h1> <div class="h-[1px] bg-gradient-to-r from-golden-500/50 via-white/10 to-transparent"></div> </div> <!-- Content --> <div class="prose prose-invert prose-lg max-w-none
        prose-headings:font-editorial prose-headings:font-bold
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-gray-300 prose-p:leading-relaxed
        prose-a:text-cobalt-400 prose-a:no-underline hover:prose-a:text-cobalt-300
        prose-strong:text-white
        prose-li:text-gray-300
        prose-blockquote:border-golden-500 prose-blockquote:text-gray-400
        prose-code:font-mono prose-code:text-cobalt-300 prose-code:bg-white/[0.05] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      ">${unescapeHTML(content)}</div> <!-- Prev/Next nav --> <div class="mt-16 pt-8 border-t border-white/[0.06]"> <div class="flex justify-between gap-8"> ${prev ? renderTemplate`<a${addAttribute(`/archive/${prev.id}`, "href")} class="group flex-1"> <div class="text-xs text-gray-600 font-mono mb-1">← Previous</div> <div class="text-sm text-gray-400 group-hover:text-cobalt-300 transition-colors"> ${prev.title || `Issue #${prev.issue_number}`} </div> </a>` : renderTemplate`<div></div>`} ${next ? renderTemplate`<a${addAttribute(`/archive/${next.id}`, "href")} class="group flex-1 text-right"> <div class="text-xs text-gray-600 font-mono mb-1">Next →</div> <div class="text-sm text-gray-400 group-hover:text-cobalt-300 transition-colors"> ${next.title || `Issue #${next.issue_number}`} </div> </a>` : renderTemplate`<div></div>`} </div> </div> <!-- Subscribe CTA --> <div class="mt-16 bg-white/[0.02] border border-white/[0.06] rounded-lg p-10 text-center"> <h3 class="font-editorial text-2xl font-bold mb-3">Want more like this?</h3> <p class="text-gray-500 mb-6">Get tomorrow's AI news delivered to your inbox today.</p> <a href="/#subscribe" class="inline-block px-8 py-3 bg-golden-500 hover:bg-golden-400 text-navy-950 font-bold text-sm transition-colors">
Subscribe for Free →
</a> </div> </div> </article> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/archive/[id].astro", void 0);

const $$file = "/home/openclaw/.openclaw/workspace/theagenttimes-web/src/pages/archive/[id].astro";
const $$url = "/archive/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
