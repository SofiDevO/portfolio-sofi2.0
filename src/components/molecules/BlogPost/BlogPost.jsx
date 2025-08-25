import { cardsData } from "@src/services/getCards";

const BlogPost = () => {
  const posts = cardsData.posts.nodes;
  const firstPost = posts.length > 0 ? posts[0] : null;

  return (
    <>
      {firstPost ? (
        <article className="post-card">
          {/* Imagen del post */}
          <div className="post-card__image-container">
            <img
              alt={firstPost.featuredImage?.node.altText || "Post image"}
              src={
                firstPost.featuredImage?.node.mediaItemUrl ||
                "/img/bannerSofidev.webp"
              }
              className="post-card__image"
            />
            <div className="post-card__image-overlay"></div>
          </div>

          {/* Contenido del post */}
          <div className="post-card__content">
            {/* Autor e información adicional */}
            <div className="post-card__author">
              <img
                src={firstPost.author.node.avatar.url}
                alt={`${firstPost.author.node.firstName} ${firstPost.author.node.lastName}`}
                className="post-card__author-image"
              />
              <div className="post-card__author-info">
                <p className="post-card__author-name">
                  {firstPost.author.node.firstName}{" "}
                  {firstPost.author.node.lastName}
                </p>
                <time dateTime={firstPost.date} className="post-card__date">
                  {new Date(firstPost.date).toLocaleDateString()}
                </time>
              </div>
            </div>

            {/* Título */}
            <a
              href={`https://blog.itssofi.dev/blog/${firstPost.slug}`}
              target="_blank"
            >
              <h3 className="post-card__title">{firstPost.title}</h3>
            </a>

            {/* Descripción */}
            <div
              className="post-card__excerpt"
              dangerouslySetInnerHTML={{ __html: firstPost.excerpt.replace(/\[.*?\]/g, "...")}}
            ></div>

            {/* Leer más link */}
            <a
              href={`https://blog.itssofi.dev/blog/${firstPost.slug}`}
              className="post-card__read-more"
              aria-label="Leer mas"
              target="_blank"
            >
              Leer más
              <span className="post-card__read-more-icon">&rarr;</span>
            </a>
          </div>
        </article>
      ) : (
        <p>No hay posts disponibles.</p>
      )}
    </>
  );
};

export default BlogPost;
