import { wpquery } from "@src/services/wordpress";

export const portfolioCardsData = await wpquery({
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
                    link
                  }
                }
                description
              }
            }
          }
        }
      }
  `,
});
