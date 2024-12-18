import { wpquery } from "@src/services/wordpress";

export const contributorsCardsData = async () => {
  try {
    const data = await wpquery({
      query: `
        query getContributors {
            contributors {
              edges {
                node {
                  uri
                  contribuidores {
                    cv {
                      node {
                        link
                      }
                    }
                    email
                    github
                    linkedin
                    rol
                    youtube
                    name
                    profilepic {
                      node {
                        link
                      }
                    }
                    description
                    banner {
                      node {
                        link
                      }
                    }
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
    return { contributorsCardsData: { edges: [] } };
  }
};

