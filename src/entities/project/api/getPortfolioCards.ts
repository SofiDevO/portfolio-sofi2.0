import { wpquery } from "@entities/blog/api/wordpress";
import { skillIcons, portafolioData } from "@entities/project/model/portfolioData";
import type { ProjectCard, SkillIconKey } from "@types/index";

export const portfolioCardsData = async (): Promise<ProjectCard[]> => {
  try {
    const data = await wpquery({
      query: `
        query proyects {
          proyects {
            nodes {
              proyectInfo {
                banner {
                  node {
                    altText
                    mediaItemUrl
                    sizes(size: MEDIUM)
                    srcSet(size: MEDIUM)
                  }
                }
                excerpt
                demourl
                skillicon
                repourl
                isrepoprivate
              }
              slug
              title
              content(format: RENDERED)
            }
          }
        }
      `,
    });

    const proyects = data?.proyects as { nodes: unknown[] } | undefined;
    const projects = proyects?.nodes ?? [];
    if (!projects.length) throw new Error("No projects found");

    return (projects as Array<Record<string, unknown>>).map((item) => {
      const info = item.proyectInfo as Record<string, unknown>;
      const banner = (info.banner as Record<string, unknown>)?.node as Record<string, string> | undefined;
      const skillIconsList = (info.skillicon as SkillIconKey[]) ?? [];

      return {
        title: item.title as string,
        content: item.content as string,
        excerpt: info.excerpt as string,
        imgSrc: banner?.mediaItemUrl ?? "",
        demoURL: info.demourl as string,
        repoURL: info.repourl as string,
        skills: skillIconsList,
        slug: item.slug as string,
        skillIcons: skillIconsList.map((skill) => skillIcons[skill] ?? ""),
        isRepoPrivate: info.isrepoprivate as boolean,
      };
    });
  } catch {
    return portafolioData.map((item) => ({
      ...item,
      skillIcons: item.skills.map((skill) => skillIcons[skill] ?? ""),
    }));
  }
};
