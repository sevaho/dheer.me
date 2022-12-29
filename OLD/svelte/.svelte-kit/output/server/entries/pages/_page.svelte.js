import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
const SocialButton_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-9jytz4{transition:0.2s;color:var(--color);border-color:var(--color)}a.svelte-9jytz4:hover{background-color:var(--color);color:white}",
  map: null
};
const SocialButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item = { name: "Not Found" } } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<div class="${"m-3"}"><a${add_attribute("href", item.href, 0)} title="${"Link to " + escape(item.name, true)}" style="${"--color: " + escape(item.color, true) + ";"}" class="${"md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 hover:text-white shadow-md py-2 px-6 inline-flex items-center svelte-9jytz4"}"><span class="${"mx-auto"}">${escape(item.name)}</span></a>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socials = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      color: "#4267B2"
    },
    {
      name: "Pintrest",
      href: "https://pintrest.com",
      color: "#E60023"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "#0072b1"
    }
  ];
  return `<div class="${"flex items-center justify-center h-screen bg-white-200"}"><div class="${"container"}"><div class="${"text-center"}"><h2 class="${"text-4xl tracking-tight leading-10 font-extrabold text-blue-900 sm:text-5xl sm:leading-none md:text-6xl"}">D&#39;heer <span class="${"text-gray-600"}">Architecture</span></h2>
			<h3 class="${"text-xl md:text-3xl mt-10"}">Website under construction</h3></div>
		<div class="${"flex flex-wrap mt-10 justify-center"}">${each(socials, (item) => {
    return `${validate_component(SocialButton, "SocialButton").$$render($$result, { item }, {}, {})}`;
  })}</div></div></div>`;
});
export {
  Page as default
};
