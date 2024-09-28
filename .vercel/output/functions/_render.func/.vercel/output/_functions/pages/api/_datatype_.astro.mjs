import { m as menuData, u as userData } from '../../chunks/userData_CoxU_2iY.mjs';
import { p as portafolioData } from '../../chunks/portfolioData_MkJEwqW_.mjs';
export { renderers } from '../../renderers.mjs';

const skillsData = [
  { name: "javascript", icon: "skill-icons:javascript" },
  { name: "HTML", icon: "skill-icons:html" },
  { name: "react", icon: "skill-icons:react-dark" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Astro", icon: "skill-icons:astro" },
  { name: "Vue.js", icon: "skill-icons:vuejs-dark" },
  { name: "CSS", icon: "skill-icons:css" },
  { name: "Sass", icon: "skill-icons:sass" },
  { name: "Styled Components", icon: "skill-icons:styledcomponents" },
  { name: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { name: "MySQL", icon: "skill-icons:mysql-dark" },
  { name: "Wordpress", icon: "skill-icons:wordpress" },
  { name: "Express", icon: "skill-icons:expressjs-dark" },
  { name: "Node.js", icon: "skill-icons:nodejs-dark" },
  { name: "Bootstrap", icon: "skill-icons:bootstrap" },
];

const socialIconsData = [
  {
    icon: "fa:github-alt",
    name: "GitHub",
    link: "https://github.com/SofiDevO",
  },
  {
    icon: "simple-icons:linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sofidev/",
  },
  {
    icon: "entypo-social:youtube-with-circle",
    name: "YouTube",
    link: "https://www.youtube.com/@SofiDev",
  },
];

const toolsData = [
  {
    name: "Slack",
    icon: "devicon:slack",
  },
  {
    name: "git",

    icon: "vscode-icons:file-type-git",
  },
  {
    name: "Bash",

    icon: "skill-icons:bash-dark",
  },
  {
    name: "Ubuntu",
    icon: "logos:ubuntu",
  },
  {
    name: "VsCode",
    icon: "devicon:vscode",
  },
  {
    name: "Figma",

    icon: "skill-icons:figma-dark",
  },
  {
    name: "XAMPP",
    icon: "logos:xampp",
  },
  {
    name: "Photoshop",

    icon: "devicon:photoshop",
  },
  {
    name: "Illustrator",
    icon: "skill-icons:illustrator",
  },
];

const dataTypes = {
  "skills": skillsData,
  // Datos sobre habilidades (skills)
  "menu": menuData,
  // Datos sobre el menú de navegación
  "portafolio": portafolioData,
  // Datos sobre proyectos de portafolio
  "socialIcons": socialIconsData,
  // Datos sobre iconos de redes sociales
  "tools": toolsData,
  // Datos sobre herramientas que utiliza el usuario
  "user": userData
  // Datos del usuario
};
const GET = ({ params }) => {
  const data = params.dataType;
  if (data === "all") {
    return new Response(
      JSON.stringify({ data: dataTypes })
      // Respondemos con un objeto que contiene todos los datos.
    );
  }
  if (!dataTypes[data]) {
    return new Response(JSON.stringify({ status: 404 }));
  }
  return new Response(
    JSON.stringify({
      [data]: dataTypes[data]
      // Respondemos con los datos específicos solicitados.
    })
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
