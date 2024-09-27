import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as createAstro, e as addAttribute, f as renderHead, g as renderSlot } from './astro/server_CKLF1DZK.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import { u as userData, m as menuData } from './userData_CoxU_2iY.mjs';

const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<button id="themeToggle" data-astro-cid-hsoaq6cp> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "sun", "icon": "line-md:sun-rising-loop", "width": "32", "height": "32", "style": "color: #ad8700", "data-astro-cid-hsoaq6cp": true })} ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "moon", "icon": "line-md:moon-loop", "width": "27", "height": "27", "style": "color: #00ffff", "data-astro-cid-hsoaq6cp": true })} </button> `;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/ThemeIcon.astro", void 0);

const $$Astro$1 = createAstro("https:/Frida-ai.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const {
    title,
    description,
    image = "/public/img/icons/sofi-icon.webp"
  } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/png" href="/img/icons/sofi-icon.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- css librerias/ cdn --><!-- Iconify CDN -->`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/BaseHead.astro", void 0);

const SITE_TITLE = "Sofi Dev";
const SITE_DESCRIPTION = "Frontend Developer";

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="/" class="logo"> <img class="logo__img"${addAttribute(userData.logo, "src")}${addAttribute(`lgoo de ${userData.userName}`, "alt")}> <h3>${userData.name}<span>${userData.lastName}</span></h3> </a>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/Logo/Logo.astro", void 0);

const $$HamburgerBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="hamburger hamburger--collapse" type="button"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span> </button>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/hamburgerBtn/HamburgerBtn.astro", void 0);

const url = "http://localhost:4322";
async function getData(dataType = "data") {
  const endpoint = dataType !== "data" ? dataType : "all";
  const res = await fetch(`${url}/api/${endpoint}`);
  const data = await res.json();
  return data[dataType];
}

const $$SocialIcons = createComponent(async ($$result, $$props, $$slots) => {
  const { socialIcons } = await getData();
  return renderTemplate`${maybeRenderHead()}<div class="social__container"> ${socialIcons.map((data, index) => renderTemplate`<a${addAttribute(data.link, "href")}${addAttribute(`social__link social__link-${index + 1}`, "class")} target="_blank"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": `social__icon `, "icon": data.icon, "width": "25", "height": "25" })} <span class="social__tooltip">${data.name}</span> </a>`)} </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/SocialIcons/SocialIcons.astro", void 0);

const $$LanguageFlag = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<a href="#" class="toggleLang"> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "flag flag-en", "icon": "emojione:flag-for-us-outlying-islands", "width": "23", "height": "23" })} </a>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/LanguageFlag/LanguageFlag.astro", void 0);

const $$Astro = createAstro("https:/Frida-ai.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const pagePathname = Astro2.url.pathname;
  return renderTemplate` ${maybeRenderHead()}<header class="header"> <div class="header__container blur"> ${renderComponent($$result, "Logo", $$Logo, {})} <nav class="header__menu"> <ul class="header__list"> ${pagePathname !== "/" && renderTemplate`<li class="header__item"> <a class="header__link" href="/">Home</a> </li>`} ${menuData.map((data) => renderTemplate`<li class="header__item"> <a class="header__link"${addAttribute(data.enlace, "href")}> ${data.texto} </a> </li>`)} ${renderComponent($$result, "LanguageFlag", $$LanguageFlag, {})} <div class="header__icons"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, {})} </div> </ul> </nav> ${renderComponent($$result, "HamburgerButton", $$HamburgerBtn, {})} </div> </header>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/Header/Header.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$SocialIcons as a, getData as g };
