import { wpquery } from "@src/services/wordpress";
import { skillIcons, portafolioData } from "@data/portfolioData";

export const portfolioCardsData = async () => {
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
                description
                demourl
                skillicon
                repourl
              }
              slug
              title
            }
          }
        }
      `,
    });
    const projects = data?.proyects?.nodes || [];
    if (!projects.length) throw new Error("No projects found");

    return projects.map(item => {
      return {
        title: item.title,
        description: item.proyectInfo.description,
        excerpt: item.proyectInfo.excerpt,
        imgSrc: item.proyectInfo.banner?.node?.mediaItemUrl || '',
        demoURL: item.proyectInfo.demourl,
        repoURL: item.proyectInfo.repourl,
        skills: item.proyectInfo.skillicon,
        slug: item.slug,
        skillIcons: item.proyectInfo.skillicon.map(skill => skillIcons[skill] ?? "" )
      }
    })
  } catch (e) {
    return portafolioData.map(item => {
      return {
        ...item,
        skillIcons: item.skills.map(skill => skillIcons[skill] ?? "")
      }
    });
  }
};
