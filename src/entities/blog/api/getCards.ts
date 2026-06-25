import { wpquery } from "@entities/blog/api/wordpress";

export const cardsData = async (): Promise<any[]> => {
  try {
    const data = await wpquery({
      query: `
        query getPostCards {
          posts {
            nodes {
              title
              slug
              featuredImage {
                node {
                  altText
                  mediaItemUrl
                  srcSet(size: MEDIUM)
                  sizes(size: LARGE)
                  link
                  sourceUrl(size: LARGE)
                }
              }
              seo {
                  cornerstone
                  readingTime
                  metaDesc
              }
              author {
                node {
                  avatar {
                    url
                  }
                  firstName
                  lastName
                  name
                  slug
                }
              }
              date
              excerpt
              categories {
                nodes {
                  name
                  slug
                  parent {
                    node {
                      name
                      slug
                      id
                    }
                  }
                  id
                  uri
                }
              }
              isSticky
            }
          }
        }
      `,
    });

    const posts = data?.posts?.nodes ?? [];
    if (!posts.length) throw new Error("No posts found");

    return posts.map((post: any) => ({
      title: post.title,
      slug: post.slug,
      date: post.date,
      excerpt: post.excerpt,
      imgSrc: post.featuredImage?.node?.mediaItemUrl || "/img/bannerSofidev.webp",
      imgAlt: post.featuredImage?.node?.altText || "Post image",
      authorName: `${post.author?.node?.firstName || ""} ${post.author?.node?.lastName || ""}`.trim() || post.author?.node?.name || "Autor",
      authorAvatar: post.author?.node?.avatar?.url || "https://secure.gravatar.com/avatar/?s=96&d=mm&r=g",
    }));
  } catch (error) {
    return [
      {
        title: "Explorando el desarrollo web",
        slug: "#",
        date: new Date().toISOString(),
        excerpt: "Este es un post de respaldo. Actualmente no pudimos conectar con el servidor de blog, pero pronto habrán más novedades.",
        imgSrc: "/img/bannerSofidev.webp",
        imgAlt: "Post de respaldo",
        authorName: "SofiDev",
        authorAvatar: "https://secure.gravatar.com/avatar/?s=96&d=mm&r=g",
      }
    ];
  }
};
