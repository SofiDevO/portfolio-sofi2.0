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

    const contributors = data.contributors.edges.map(({ node }) => ({
      uri: node.uri,
      ...node.contribuidores,
      cv: node.contribuidores?.cv?.node?.link || "",
      profilepic: node.contribuidores?.profilepic?.node?.link || "",
      banner: node.contribuidores?.banner?.node?.link || "",
    }));

    
    return { contributors };
  } catch (e) {
    console.error("Error fetching contributors data:", e);
    return { contributors: [] };
  }
};