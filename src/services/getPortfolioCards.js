import { wpquery } from "@src/services/wordpress";

export const portfolioCardsData = async () => {
  try {
    const data = await wpquery({
      query: `
        query gePortfolioCards {
          proyectosPortafolio(where: {orderby: {field: MODIFIED, order: DESC}}) {
            edges {
              node {
                title(format: RENDERED)
                proyectoPortafolio {
                  skills
                  skillicons
                  imgsrc_url {
                    node {
                      link: mediaItemUrl
                      srcSet(size: ALX_MEDIUM)
                      sizes(size: ALX_MEDIUM)
                    }
                  }
                  description
                  demourl
                  repoUrl
                  detalle
                }
                slug
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
