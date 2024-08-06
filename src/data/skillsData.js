export const skillsData = [
  { name: "react", icon: "skill-icons:react-dark" },
  { name: "javascript", icon: "skill-icons:javascript" },
  { name: "Astro", icon: "skill-icons:astro" },
  { name: "CSS", icon: "skill-icons:css" },
  { name: "Sass", icon: "skill-icons:sass" },
  { name: "Styled Components", icon: "skill-icons:styledcomponents" },
  { name: "MySQL", icon: "skill-icons:mysql-dark" },
  { name: "Wordpress", icon: "skill-icons:wordpress" },
  { name: "Express", icon: "skill-icons:expressjs-dark" },
];

export const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
