import { wpquery } from "@src/services/wordpress";

export const portfolioCardsData = async () => {
  try {
    const data = await wpquery({
      query: `
        query gePortfolioCards {
          proyectosPortafolio {
            edges {
              node {
                title(format: RENDERED)
                uri
                proyectoPortafolio {
                  skills
                  skillicons
                  imgsrc_url {
                    node {
                      link:mediaItemUrl
                    }
                  }
                  description
                  demourl
                  repoUrl
                }
              }
            }
          }
        }
      `,
    });
    return data;
  } catch (e) {
    console.error("Error fetching portfolio data:", e);
    return { proyectosPortafolio: { edges: [] } };
  }
};
