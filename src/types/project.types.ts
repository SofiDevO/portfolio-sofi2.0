export type SkillIconKey =
  | "JavaScript"
  | "React"
  | "Astro"
  | "CSS"
  | "Sass"
  | "StyledComponents"
  | "Bootstrap"
  | "Tailwind"
  | "NodeJs"
  | "Express"
  | "MySQL"
  | "Wordpress"
  | "HTML"
  | "Vue"
  | "GraphQL"
  | "Typescript"
  | "Nextjs"
  | "Bash"
  | "Hono"
  | "MongoDB"
  | "Prisma"
  | "CloudflareWorkers"
  | "Swagger"
  | "PHP";

export interface ProjectItem {
  imgSrc: string;
  title: string;
  skills: SkillIconKey[];
  excerpt: string;
  demoURL: string;
  repoURL: string;
  content: string;
  isRepoPrivate?: boolean;
}

export interface ProjectCard extends Omit<ProjectItem, "skills"> {
  skills: SkillIconKey[];
  skillIcons: string[];
  slug?: string;
}
