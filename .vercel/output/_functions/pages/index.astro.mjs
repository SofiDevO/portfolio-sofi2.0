import { c as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderSlot, b as createAstro, e as addAttribute, a as renderComponent } from '../chunks/astro/server_CJ5Zltcn.mjs';
import 'kleur/colors';
import { a as $$SocialIcons, g as getData, $ as $$Layout } from '../chunks/Layout_DiItI1sq.mjs';
import 'clsx';
/* empty css                                 */
import { jsx } from 'react/jsx-runtime';
import { u as userData } from '../chunks/userData_CoxU_2iY.mjs';
import { s as skillsIconsMapped } from '../chunks/portfolioData_MkJEwqW_.mjs';
export { renderers } from '../renderers.mjs';

const $$BackgroundGradient = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="backgroud"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/layouts/BackgroundGradient/BackgroundGradient.astro", void 0);

const $$BackgroundIconsFloat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-icons" id="bg-icons"> <!-- Dynamically generated span elements will be added here --> </div> `;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/BackgroundIconsFloat/BackgroundIconsFloat.astro", void 0);

const $$Astro$g = createAstro("https://itssofi.dev/");
const $$ProfilePicture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ProfilePicture;
  const { data } = Astro2.props;
  return renderTemplate` ${maybeRenderHead()}<div class="image__container"> <button class="image__button"> <img${addAttribute(data, "src")} id="profile-picture" class="hero__img hero-profile-img" alt="Profile Picture"> </button> <div class="hero__skills"> <!-- Iconos rendered by a template string --> </div> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/ProfilePicture/ProfilePicture.astro", void 0);

const $$Astro$f = createAstro("https://itssofi.dev/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero"> ${renderComponent($$result, "BackgroundIconsFloat", $$BackgroundIconsFloat, {})} <div class="hero__container"> <div class="hero__content"> <h1 class="hero__title">Hi! I'm ${data.name}<span class="span__blink">${data.lastName}</span></h1> <div class="text__container"> <p class="hero__slogan">≥${data.sloganHero1}</p> </div> <div class="container__icons"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, {})} </div> </div> ${renderComponent($$result, "ProfilePicture", $$ProfilePicture, { "data": data.profilePicture })} </div> </section>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/organisms/Hero/Hero.astro", void 0);

const $$Astro$e = createAstro("https://itssofi.dev/");
const $$DividerBottom = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$DividerBottom;
  const { fill = "shape-fill" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper"> <div class="custom-shape-divider-bottom-1723178641"> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path${addAttribute(fill, "class")} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path> </svg> </div> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/DividerBottom/DividerBottom.astro", void 0);

const Title = ({ titleDesc, clase }) => {
  return /* @__PURE__ */ jsx("h2", { className: `title ${clase}`, children: titleDesc });
};

const $$Astro$d = createAstro("https://itssofi.dev/");
const $$ButtonAbout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ButtonAbout;
  const { text, clase, link, typeMail = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`about__links about__links--${clase} link`, "class")}${addAttribute(typeMail ? `mailto:${link}` : link, "href")}${addAttribute(typeMail ? "" : "_blank", "target")}> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "about__iconify", "icon": "uil:arrow-up-left", "width": "25", "height": "25" })} ${text} ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "about__iconify", "icon": "iwwa:file-pdf", "width": "25", "height": "25" })} </a>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/ButtonAbout/ButtonAbout.astro", void 0);

const $$Astro$c = createAstro("https://itssofi.dev/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$About;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="about" id="about"> <article class="about__container"> <div class="about__profile"> <div class="profile__box"> <img${addAttribute(data.aboutPicture, "src")}${addAttribute(`Fot de perfil de  ${data.name} ${data.lastName}`, "alt")} class="profile__img" width="100" height="100"> </div> ${renderComponent($$result, "ButtonAbout", $$ButtonAbout, { "typeMail": "true", "data": data.email, "link": data.email, "text": "email", "clase": "email" })} ${renderComponent($$result, "ButtonAbout", $$ButtonAbout, { "link": data.cv, "text": "Download cv", "clase": "cv" })} </div> <div class="about__content"> ${renderComponent($$result, "Title", Title, { "titleDesc": "About Me", "clase": "title-dark" })} <p class="about__description"> ${data.about.intro} </p> <h5 class="about__highlighted">${data.about.highlighted}</h5> <p class="about__description"> ${data.about.continuation} </p> </div> </article> ${renderComponent($$result, "Calendar", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "@src/components/molecules/GithubCalendar/Calendar", "client:component-export": "default" })} </section>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/organisms/About/About.astro", void 0);

const $$Astro$b = createAstro("https://itssofi.dev/");
const $$DividerTop = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$DividerTop;
  const { fill = "shape-fill" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper"> <div class="custom-shape-divider-top-1723861291"> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> <path${addAttribute(fill, "class")} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path> </svg> </div> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/DividerTop/DividerTop.astro", void 0);

const $$Astro$a = createAstro("https://itssofi.dev/");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { clase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="slider"> <div${addAttribute(`slide__track ${clase}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/Carousel/Carousel.astro", void 0);

const $$Astro$9 = createAstro("https://itssofi.dev/");
const $$CarrouselSkills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CarrouselSkills;
  const { skillsData } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Carousel", $$Carousel, { "clase": "slide__track--skills" }, { "default": ($$result2) => renderTemplate`${[...skillsData, ...skillsData].map((data) => renderTemplate`${maybeRenderHead()}<div class="slide"> <div class="tag">${data.name}</div> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": data.icon, "width": "60", "height": "60" })} </div>`)}` })}`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/CarouselSkills/CarrouselSkills.astro", void 0);

const $$Astro$8 = createAstro("https://itssofi.dev/");
const $$CarouselTools = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CarouselTools;
  const { toolsData } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Carousel", $$Carousel, { "clase": "slide__track--tools" }, { "default": ($$result2) => renderTemplate`${[...toolsData, ...toolsData].map((data) => renderTemplate`${maybeRenderHead()}<div class="slide"> <div class="tag">${data.name}</div> ${renderComponent($$result2, "iconify-icon", "iconify-icon", { "icon": data.icon, "width": "60", "height": "60" })} </div>`)}` })}`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/CarouselTools/CarouselTools.astro", void 0);

const $$BarraTerminal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<div class="terminal_toolbar"> <div class="butt"> <div class="btn btn__red btn-color"></div> <div class="btn btn__yellow"></div> <div class="btn btn__green"></div> </div> <p class="user">${userData.userName}@admin: ~</p> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/BarraTerminal/BarraTerminal.astro", void 0);

const $$Astro$7 = createAstro("https://itssofi.dev/");
const $$CardTerminal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CardTerminal;
  const { clase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`caja__terminal ${clase}`, "class")}> ${renderComponent($$result, "BarraTerminal", $$BarraTerminal, {})} <div class="caja__cristal caja__dark"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/CardTerminal/cardTerminal.astro", void 0);

const $$Astro$6 = createAstro("https://itssofi.dev/");
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Skills;
  const { data, skills, tools } = Astro2.props;
  return renderTemplate` ${maybeRenderHead()}<section class="skills" id="skills"> <div class="skills__container"> <div class="skills__info"> <div class="skills__textos"> ${renderComponent($$result, "Title", Title, { "titleDesc": "Skills", "clase": "title-dark" })} <p class="skills__description"> ${data.aboutSkills.intro} </p> <h5 class="skills__description skills__description--subtitle"> ${data.aboutSkills.highlighted} </h5> <p class="skills__description"> ${data.aboutSkills.continuation} </p> </div> <div class="skills__avatar__container"> <img id="skills__avatar" class="skills__avatar" src="../img/funkoSofi.png"${addAttribute(`avatar funko of ${data.userName}`, "alt")}> ${renderComponent($$result, "CardTerminal", $$CardTerminal, { "clase": "skills__terminal skills__popup" }, { "default": ($$result2) => renderTemplate` <p class="skills__terminal__content"> ${data.terminalInfo} </p> ` })} </div> </div> ${renderComponent($$result, "CarrouselSkills", $$CarrouselSkills, { "skillsData": skills })} <div class="skills__carousel--tools"> ${renderComponent($$result, "Title", Title, { "titleDesc": "Tools", "clase": "title-dark" })} ${renderComponent($$result, "CarouselTools", $$CarouselTools, { "toolsData": tools })} </div> </div> </section>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/organisms/Skills/Skills.astro", void 0);

const $$Astro$5 = createAstro("https://itssofi.dev/");
const $$CardPortfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$CardPortfolio;
  const { titulo, imgSrc, demoURL, repoURL, descripcion, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="card"> <div class="card__cara--A"> <img class="card__img"${addAttribute(`Imagen de portada de ${titulo}`, "alt")}${addAttribute(imgSrc, "src")}> <div class="card__cara--B"> <div class="thecnology"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": skill, "width": "20", "height": "20" })}`)} </div> <h3 class="card__title">${titulo}</h3> <p class="card__description">${descripcion}</p> <div class="card__links"> <a${addAttribute(demoURL, "href")}>ver Demo ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "quill:link-out", "width": "15", "height": "15", "style": "color: aqua" })}</a> <a${addAttribute(repoURL, "href")}>ver Repo ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "quill:link-out", "width": "15", "height": "15", "style": "color: aqua" })}</a> </div> </div> </div> </article>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/CardPortfolio/CardPortfolio.astro", void 0);

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="portfolio" id="portfolio"> <h2></h2> <div class="card__section"> ${skillsIconsMapped.slice(0, 6).map((data) => renderTemplate`${renderComponent($$result, "CardPortfolio", $$CardPortfolio, { "titulo": data.titulo, "imgSrc": data.imgSrc, "demoURL": data.demoURL, "repoURL": data.repoURL, "descripcion": data.descripcion, "skills": data.skills })}`)} </div> </section>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/organisms/Portfolio/Portfolio.astro", void 0);

const $$Astro$4 = createAstro("https://itssofi.dev/");
const $$SocialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SocialCard;
  const { extrClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`card-social ${extrClass}`, "class")}> ${renderSlot($$result, $$slots["default"])} </article>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/SocialCard/SocialCard.astro", void 0);

const $$Astro$3 = createAstro("https://itssofi.dev/");
const $$Subtitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Subtitle;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3 class="card-social__title">${content}</h3>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/Subtitle/Subtitle.astro", void 0);

const $$DiscordCardContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card-social__container"> ${renderComponent($$result, "Subtitle", $$Subtitle, { "content": "Join our Discord community" })} <p class="card-social__content">
Connect with web developers, share resources, and get help on your frontend
    projects.
</p> <a class="card-social__link" href="https://discord.com/invite/VYDj8pvfE4" target="_blank" rel="noreferrer noopener nofollow">
Join our community ${renderComponent($$result, "iconify-icon", "iconify-icon", { "icon": "quill:link-out", "width": "15", "height": "15", "style": "color: aqua" })}</a> <img class="card-social__image" src="../img/icons/DiscordLogo.svg" alt="Discord logo"> </div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/DiscordCardContent/DiscordCardContent.astro", void 0);

const $$Astro$2 = createAstro("https://itssofi.dev/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { type = "button", value = "value", content, extraClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`form__submit  ${extraClass}`, "class")}${addAttribute(type, "type")}${addAttribute(value, "value")}>${content}</button>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/Button/Button.astro", void 0);

const $$Astro$1 = createAstro("https://itssofi.dev/");
const $$SocialCardImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialCardImage;
  const { image, altDesc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img class="card-social__image"${addAttribute(image, "src")}${addAttribute(altDesc, "alt")}>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/SocialCardImage/SocialCardImage.astro", void 0);

const $$YoutubeCardContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="card-social__container"> ${renderComponent($$result, "Subtitle", $$Subtitle, { "content": "My Latest Youtube video" })} <p class="card-social__content">I love sharing the knowledge I've gained over the years on my YouTube channel. Check out my latest video and join me on this learning journey!</p> <div class="youtubeThumbnail"></div> ${renderComponent($$result, "Button", $$Button, { "type": "button", "content": "Watch", "extraClass": "youtube__button" })} ${renderComponent($$result, "SocialCardImage", $$SocialCardImage, { "image": "/img/icons/youtube.svg", "altDesc": "Youtube logo" })} </div> `;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/YoutubeCardContent/YoutubeCardContent.astro", void 0);

const $$YoutubeModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${maybeRenderHead()}<dialog class="youtube__modal__box" data-astro-cid-cniau3tn> ${renderComponent($$result, "iconify-icon", "iconify-icon", { "class": "modal__close__button", "icon": "ant-design:close-circle-twotone", "width": "50", "height": "50", "style": "color: #00c8f0", "data-astro-cid-cniau3tn": true })} <div class="modal__container" data-astro-cid-cniau3tn> <iframe id="ytchannel" class="latestVideoEmbed" vnum="0" width="100%" height="100%" frameborder="0" allowfullscreen id="ytchannel" data-astro-cid-cniau3tn>
    </iframe> </div> </dialog> `;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/YoutubeModal/YoutubeModal.astro", void 0);

const $$ContactFormMain = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` ${renderComponent($$result, "Subtitle", $$Subtitle, { "content": "Get in touch with Me " })} ${maybeRenderHead()}<form class="contact" method="POST" novalidate> <div class="form__group form__group-name"> <label for="name">Your Name: * </label> <input type="text" id="name" name="name" required> <span class="error__msg" id="nameError"></span> </div> <div class="form__container"> <div class="form__group form__group-email"> <label for="email">Your Email: *</label> <input type="email" id="email" name="email" required> <span class="error__msg" id="emailError"></span> </div> <div class="form__group form__group-subject"> <label for="subject">Subject: *</label> <input type="text" id="subject" name="subject" required> <span class="error__msg" id="subjectError"></span> </div> </div> <div class="form__group form__group-message"> <label for="message">Message: *</label> <textarea id="message" name="message" rows="4" required></textarea> <span class="error__msg" id="messageError"></span> </div> <div class="loader"></div> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "value": "Send", "content": "Send" })} </form>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/molecules/ContactFormContent/ContactFormMain.astro", void 0);

const $$Astro = createAstro("https://itssofi.dev/");
const $$ToastNotification = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ToastNotification;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="toast-alerts"></div>`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/atoms/ToastNotification/ToastNotification.astro", void 0);

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="social" class="social"> ${renderComponent($$result, "Title", Title, { "titleDesc": "Find me on   My social media", "clase": "title-dark social__title" })} <div class="social__grid"> <div class="social__item social__item-1"> ${renderComponent($$result, "SocialCard", $$SocialCard, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DiscordCardContent", $$DiscordCardContent, {})} ` })} </div> <div class="social__item social__item-2"> ${renderComponent($$result, "SocialCard", $$SocialCard, { "extrClass": "youtube__card" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "YoutubeCardContent", $$YoutubeCardContent, {})} ` })} </div> <div class="social__item social__item-3"> ${renderComponent($$result, "SocialCard", $$SocialCard, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContactFormMain", $$ContactFormMain, {})} ` })} </div> <div class="social__item social__item-4"> ${renderComponent($$result, "SocialCard", $$SocialCard, {})} </div> </div> <div class="social__background"></div> ${renderComponent($$result, "YoutubeModal", $$YoutubeModal, {})} </section> ${renderComponent($$result, "ToastNotification", $$ToastNotification, {})}`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/components/organisms/Social/Social.astro", void 0);

const prerender = true;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { user, skills, tools, socialIcons } = await getData();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackgroundGradient", $$BackgroundGradient, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, { "data": user, "socialIcons": socialIcons })} ` })} ${renderComponent($$result2, "DividerTop", $$DividerTop, {})} ${renderComponent($$result2, "About", $$About, { "data": user })} ${renderComponent($$result2, "DividerBottom", $$DividerBottom, { "fill": "shape-fill-3" })} ${renderComponent($$result2, "Skills", $$Skills, { "data": user, ",": true, "skills": skills, "tools": tools })} ${renderComponent($$result2, "DividerTop", $$DividerTop, { "fill": "shape-fill-purple " })} ${renderComponent($$result2, "Portfolio", $$Portfolio, {})} ${renderComponent($$result2, "DividerBottom", $$DividerBottom, { "fill": "shape-fill-3" })} ${renderComponent($$result2, "Social", $$Social, {})} ` })}`;
}, "/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/index.astro", void 0);

const $$file = "/home/sofidev/laboratorio/portfolio-sofi2.0/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
